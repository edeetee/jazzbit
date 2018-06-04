import Tone, { MembraneSynth, FMSynth, Transport, Synth, context } from 'tone'
import { Scale, Chord, Note } from 'tonal'
import * as Key from 'tonal-key'
import {randomNormal} from 'd3-random'

import * as Instrument from './instrument'
import SynthEditor, {doCircle} from './gui'

var {staticReturn, perlinNoise, Repeater, floatToNote, toSecs, movingMean, seconds} = Instrument;

//visual logic

let chords = Key.chords("C minor")
// console.log(Chord.notes(chords[0]))
let notes = getChord(3)

function getChord(number){
    return Chord.notes(chords[number-1]).map(Note.simplify)
}

// var slider = document.getElementById('slider')
// slider.addEventListener('change', updateBpm)

// function updateBpm() {
//     Transport.bpm.value = slider.valueAsNumber;
//     Transport.stop()
//     Transport.start()
// }

Transport.bpm.value = 100;

//synthesisers

var melodySynth = new FMSynth({
    "harmonicity": 8,
    "modulationIndex": 10,
    "oscillator": {
        "type": "square"
    },
    "envelope": {
        "attack": 0.001,
        "decay": 2,
        "sustain": 0.1,
        "release": 2
    },
    "modulation": {
        "type": "square"
    },
    "modulationEnvelope": {
        "attack": 0.002,
        "decay": 0.2,
        "sustain": 0,
        "release": 0.2
    }
})

var kickSynth = new MembraneSynth({
    envelope: {
        attack: 0.01,
        attackCurve: 'exponential'
    }
})

let bassSynth = new Tone.AMSynth({
    oscillator: {
        type: 'sine'
    }
});

let editor = new SynthEditor("jsoncontainer", melodySynth)

//instrument controllers

// new Instrument.Repeater(kickSynth, {
//     note: "C-1",
//     length: "8n",
//     getProbability: perlinNoise(0.3, 0.2, 0.8),
//     probability: 1
// })

var backing = new Instrument.Repeater(bassSynth, {
    notes: notes,
    getNote: movingMean(perlinNoise(0.2, 1, 1), 0.3),
    probability: 1,
    getLength: randomNormal(toSecs("1m"), toSecs("2n")),
    quantize: '4n',
    onDraw: doCircle
}).Debug()

var melody = new Instrument.Repeater(melodySynth, {
    notes: notes,
    getNote: movingMean(perlinNoise(0.2, 2.5, 4), 0.2),
    // getNote: perlinNoise(3, 3, 1),
    // getNote: () => seconds()/3,
    // getProbability: movingMean(perlinNoise(1, 0.5, 0.4), 0.1),
    probability: 1,
    getLength: randomNormal(toSecs("8n"), toSecs("64n")),
    length: toSecs('8n'),
    quantize: '16n',
    snap: "8n",
    onDraw: doCircle
})

let i = 0;
let intervals = [1, 6, 2, 5]
Transport.scheduleRepeat(time => {
    let newInt = intervals[i++%intervals.length]-1;
    // let chord = Note.simplify(chords[newInt]) + " minor blues"
    // console.log("CHORD: " + chord)
    // notes = Scale.notes(chord).map(Note.simplify).map(note => note)
    console.log(chords[newInt])
    melody.notes = Chord.notes(chords[newInt])
    // backing.notes = notes
}, "4m")

Transport.swing = 0
context.latencyHint = process.env.NODE_ENV == "production" ? "playback" : "balanced"

//also starts transport
Transport.start()