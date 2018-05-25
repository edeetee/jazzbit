import Tone from 'Tone'
import * as d3 from 'd3-random'
import {Scale, Chord} from 'tonal'
import Noise from 'noisejs'
import Perlin from "proc-noise"

import Slider from 'nouislider'

var kickSynth = new Tone.MembraneSynth({
    envelope: {
        attack: 0.01,
        attackCurve: 'exponential'
    }
}).toMaster()

var chordSynth = new Tone.FMSynth({
    modulationIndex: 1,
    envelope: {
        release: 0.15
    }
}).toMaster()

let timeDist = d3.randomNormal(0.3, 0.3)

let noteValDist = d3.randomNormal(0.5, 0.2)

// let noise = new Noise(Math.random())
let perlin = new Perlin(Math.random())

function timeMap(start, length, from, to){
    to = typeof to === 'undefined' ? 1 : to
    from = from || 0

    return Math.min(to, Math.max(from+to*(Date.now()-start)/length, from))
}
/**@param {String[]} chordArr
 * @param {Function} dist
 * @param {Number} [baseVal]
 * @return {String}
 */
function distToNote(chordArr, dist, baseVal){
    baseVal = baseVal || 0

    return floatToNote(chordArr, dist()+baseVal)
}

/**@param {Number[]} chordArr
 * @param {String} val
 * @return {String}
 */
function floatToNote(chordArr, val){
    let octave = Math.floor(val)
    let i = Math.floor((val-octave)*chordArr.length)

    return chordArr[i] + String(octave)
}

let start = Date.now()
function seconds(){
    return (Date.now()-start)/1000
}

let notes = Scale.notes("C blues")
console.log(notes)

var slider = document.getElementById('slider')
Slider.create(slider, {
    start: 0,
    range: {
        'min': 0,
        'max': 100
    }
})

Tone.Transport.scheduleRepeat(function(time){
    if(Math.random() < 0.7)
        kickSynth.triggerAttackRelease('C0', '8n', time)
}, "8n");

// Tone.Transport.scheduleRepeat(function(time){
//     if(doNoteDist() < timeMap(start, 10000, 0.7, 1))
//         chordSynth.triggerAttackRelease(randElm(notes)+"3", '16n', time)
// }, "16n");


Tone.Transport.scheduleRepeat(function(time){
    if(Math.random() < 0.6 && chordSynth){
        let length = Math.max(0.1, timeDist());
        // let note = distToNote(notes, noteValDist, 2.5+perlin.noise(seconds()))
        let note = floatToNote(notes, 1+seconds()/3)
        let lengthT = new Tone.Time(length).quantize("16t")
        if(lengthT != 0){
            console.log(note)
            chordSynth.triggerAttackRelease(note, lengthT, time)
        }
    }
}, "16n");

Tone.Transport.swing = 0.4

Tone.Transport.start()