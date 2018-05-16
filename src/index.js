import Tone from 'Tone'
import * as d3 from 'd3-random'
import {transpose, Scale, Chord} from 'tonal'

var kickSynth = new Tone.MembraneSynth({
    envelope: {
        attack: 0.01,
        attackCurve: 'exponential'
    }
}).toMaster()

var chordSynth = new Tone.FMSynth({
    modulationIndex: 1,
    envelope: {
        release: 0
    }
}).toMaster()

let timeDist = d3.randomNormal(0.1, 0.01)

let doNoteDist = d3.randomNormal(0.5, 0.5)


function timeMap(start, length, from, to){
    to = typeof to === 'undefined' ? 1 : to
    from = from || 0

    return Math.min(to, Math.max(from+to*(Date.now()-start)/length, from))
}

function randElm(arr) {
    let i = Math.floor(Math.random()*arr.length)
    return arr[i]
}

let start = Date.now()

let notes = Scale.notes("C bebop")
console.log(notes)

Tone.Transport.scheduleRepeat(function(time){
    kickSynth.triggerAttackRelease('C0', '8n', time)
}, "4n");

// Tone.Transport.scheduleRepeat(function(time){
//     if(doNoteDist() < timeMap(start, 10000, 0.7, 1))
//         chordSynth.triggerAttackRelease(randElm(notes)+"3", '16n', time)
// }, "16n");

Tone.Transport.scheduleRepeat(function(time){
    if(doNoteDist() < 0.9 || true)
        chordSynth.triggerAttackRelease(randElm(notes)+"3", '16n', time)
}, "16n");

Tone.Transport.swing = 0.4

Tone.Transport.start()