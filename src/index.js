import Tone, { MembraneSynth, FMSynth, Transport, Synth, context } from 'tone'
import { Scale, Chord, Note, Distance } from 'tonal'
import * as Key from 'tonal-key'
import {randomNormal} from 'd3-random'

import * as Instrument from './instrument'
import SynthEditor, {doCircle, circleDrawer} from './gui'

var {staticReturn, perlinNoise, Repeater, floatToNote, toSecs, movingMean, seconds} = Instrument;

//visual logic
let bases = Note.names(" b")
let base = bases[Math.floor(bases.length*Math.random())]
let key = base + (Math.random()<0.5 ? " minor" : " major")
console.log("Key: " + key)
let chords = Key.chords(key)

let i = 0;
let progressions = [[4,5,1], [2,5,1], [5,2,1], [3,2,1], [3,4,1]]
let progression = progressions[Math.floor(progressions.length*Math.random())]

let chord = Chord.notes(chords[progression[0]])

Transport.scheduleRepeat(time => {
    if(progression.length <= i){
        progression = progressions[Math.floor(progressions.length*Math.random())]
        i = 0
    }

    let newInt = progression[i]-1;
    // let chord = Note.simplify(chords[newInt]) + " minor blues"
    // notes = Scale.notes(chord).map(Note.simplify).map(note => note)
    chord = Chord.notes(chords[newInt])
    console.log("CHORD: " + chord)
    melody.notes = Scale.notes(Distance.transpose(base, "1P") + ' blues')

    i++;
}, "4m")

let notes = Scale.notes(key + ' blues')
// let notes = chord.map()     
console.log("notes: " + notes)

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


Transport.bpm.value = 70+50*Math.random();

//synthesisers

var melodySynth = new FMSynth({
    "harmonicity": 8,
    "modulationIndex": 10,
    "oscillator": {
        "type": "square"
    },
    "envelope": {
        "attack": 0.01,
        "decay": 1,
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
}).toMaster()

var kickEff = new Tone.Distortion(0.2).toMaster();
var kickSynth = new MembraneSynth({
    octaves: 6,
    pitchDecay: toSecs("8n"),
    "envelope": {
        "attack": 0.2,
        "attackCurve": 'exponential',
        "release": 0.1
    }
})
kickSynth.connect(kickEff)

let cymbalSynth = new Tone.MetalSynth({
    
}).toMaster()

let effect = new Tone.Chorus(1/toSecs('4n'), 1/toSecs('2n'), 0.6).toMaster();
let bassSynth = new Tone.PolySynth(4, Tone.AMSynth)
bassSynth.set({
    harmonicity: 1,
    oscillator: {
        type: 'sine'
    }
})
bassSynth.connect(effect)

let editor = new SynthEditor("jsoncontainer", kickSynth)

//instrument controllers

let percussionProb = perlinNoise(0.5, 0, 1)

// new Instrument.Repeater(kickSynth, {
//     note: "C1",
//     getLength: randomNormal(toSecs("8n"), toSecs("4n")),
//     length: "8n",
//     quantize: '8n',
//     getProbability: percussionProb,
//     // probability: 1
// }).Debug()

// new Instrument.Repeater(cymbalSynth, {
//     note: "C0",
//     getLength: randomNormal(toSecs("8n"), toSecs("4n")),
//     quantize: '8n',
//     getProbability: percussionProb,
//     // probability: 1
// })

new Instrument.Repeater(bassSynth, {
    // notes: Chord.notes(chords[progression[0]]),
    // getNote: randomNormal(2, 0.5),
    getNote: () => getRandom(chord, 3).map(val => val+"3"),
    probability: 1,
    getLength: randomNormal(toSecs("1m"), toSecs("2n.")),
    quantize: '4n',
    onDraw: circleDrawer(null, 0.2, 1.5)
})

let melody = new Instrument.Repeater(melodySynth, {
    notes: notes,
    getNote: movingMean(perlinNoise(0.1, 3, 4), 0.5),
    // getNote: perlinNoise(3, 3, 1),
    // getNote: () => seconds()/3,
    getProbability: perlinNoise(0.4, 0.4, 0.6),
    // probability: 1,
    getLength: movingMean(perlinNoise(0.4, toSecs("16n"), toSecs("4n")), toSecs("16n")),
    // length: toSecs('8n'),
    // quantize: '16n',
    // snap: "8n",
    onDraw: circleDrawer(50)
})

Transport.swing = 1
context.latencyHint = process.env.NODE_ENV == "production" ? "playback" : "balanced"

//also starts transport
Transport.start()