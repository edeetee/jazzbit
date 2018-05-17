import Tone from 'tone'
import * as d3 from 'd3-random'
import {Scale, Chord} from 'tonal'
import Noise from 'noisejs'
import Perlin from "proc-noise"

var kickSynth = new Tone.MembraneSynth({
    envelope: {
        attack: 0.01,
        attackCurve: 'exponential'
    }
}).toMaster()

var chordSynth = new Tone.FMSynth({
    modulationIndex: 2,
    envelope: {
        attack: 0.1,
        release: 0.01
    }
}).toMaster()

let timeDist = d3.randomNormal(Tone.Time("8n").toSeconds(), Tone.Time("16n").toSeconds())

let noteValDist = d3.randomNormal(0.5, 0.2)

// let noise = new Noise(Math.random())
let perlin = new Perlin(Math.random())

function timeMap(start, length, from, to){
    to = typeof to === 'undefined' ? 1 : to
    from = from || 0

    return Math.min(to, Math.max(from+to*(Date.now()-start)/length, from))
}
/**@param {Number[]} chordArr
 * @param {Function} dist
 * @param {Number} [baseOctave]
 * @param {Number} [baseVal]
 */
function distToNote(chordArr, dist, baseVal){
    baseVal = baseVal || 0

    let val = dist()+baseVal
    let octave = Math.floor(val)
    let i = Math.floor((val-octave)*chordArr.length)

    return chordArr[i] + String(octave)
}

let start = Date.now()
function seconds(){
    return (start-Date.now())/1000
}

let notes = Scale.notes("E# minor")

var slider = document.getElementById('slider')
slider.addEventListener('change', updateBpm)

function updateBpm(){
    Tone.Transport.bpm.rampTo(slider.valueAsNumber, 1)
    console.log(slider.valueAsNumber)
}

// Tone.Transport.scheduleRepeat(function(time){
//     if(Math.random() < 0.9)
//         kickSynth.triggerAttackRelease('C0', '8n', time)
// }, "8n");

// Tone.Transport.scheduleRepeat(function(time){
//     if(doNoteDist() < timeMap(start, 10000, 0.7, 1))
//         chordSynth.triggerAttackRelease(randElm(notes)+"3", '16n', time)
// }, "16n");

let noteEnd = 0;

Tone.Transport.scheduleRepeat(function(time){
    if(Math.random() < 0.7 && noteEnd < time){
        let length = Math.max(0.01, timeDist());
        let note = distToNote(notes, noteValDist, 2.5+perlin.noise(seconds()))
        let lengthT = new Tone.Time(length).quantize("16n")
        // console.log(new Tone.Time(lengthT).toNotation())
        if(lengthT != 0){
            chordSynth.triggerAttackRelease(note, length, time)
            noteEnd = time+length;
        }
    }
}, "16n");

Tone.Transport.swing = 0.4

Tone.Transport.start()