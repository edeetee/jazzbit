import { Transport, Time, Event, Draw, context } from 'tone'
import Noise from 'noisejs'
import Perlin from "proc-noise"
import {randomNormal} from 'd3-random'

export function toSecs(notation) {
    return Time(notation).toSeconds()
}

// let noise = new Noise(Math.random())
let perlin = new Perlin(Math.random())

function timeMap(start, length, from, to) {
    to = typeof to === 'undefined' ? 1 : to
    from = from || 0

    return Math.min(to, Math.max(from + to * (Date.now() - start) / length, from))
}
/**@param {String[]} chordArr
 * @param {Function} dist
 * @param {Number} [baseVal]
 * @return {String}
 */
export function distToNote(chordArr, dist, baseVal) {
    baseVal = baseVal || 0

    return floatToNote(chordArr, dist() + baseVal)
}

/**@param {Number[]} chordArr
 * @param {String} val
 * @return {String}
 */
export function floatToNote(chordArr, val) {
    let octave = Math.floor(val)
    let i = Math.floor((val - octave) * chordArr.length)

    return chordArr[i] + String(octave)
}

export function seconds() {
    return Transport.seconds
}

export function waitForTime(time) {
    return new Promise(resolve => Transport.schedule(resolve, time));
}

function newSeed(){
    return Math.random() * 99999
}

/**
 * @typedef {Object} RepeaterOptions
 * 
 * @prop {Function} [getProbability]
 * @prop {Number} [probability]
 * 
 * @prop {String} [quantize]
 * 
 * @prop {String[]} [notes]
 * @prop {Function} [getNote]
 * 
 * @prop {String} [note]
 * 
 * @prop {Function} [getLength]
 * @prop {String} [length]
 * 
 * @prop {String} [snap] snap the start of each note
 * 
 * @prop {Function} onDraw
 * 
 */

export class Repeater {
    /**
     * @param instrument
     * @param {RepeaterOptions} options
     */
    constructor(instrument, options) {
        let {quantize} = options;
        this.note = options.note;
        this.notes = options.notes;

        this.note = options.note

        let getLength = options.length ? () => options.length : 
            options.getLength

        let getProbability = options.probability ? () => options.probability : 
            options.getProbability

        let getNote = this.note ? () => this.note : 
            this.notes ? () => floatToNote(this.notes, options.getNote()) : 
                options.getNote

        let seed = newSeed()
        instrument.sync()
        this.instrument = instrument

        //transport callback
        let playNote = function (time) {
            let length = Math.max(0, getLength())

            if(this.debug) console.log('test')

            //quantize if exists
            if (quantize){
                length = Time(length).quantize(quantize)
                if(length <= 0){
                    length = toSecs(quantize)
                }
            }

            if (Math.random() < getProbability() && 0 < length) {
                let note = getNote()
                // if(this.debug) console.log(note + ', ' + Time(length).toNotation())
                instrument.triggerAttackRelease(note, length, time)
                
                Draw.schedule(() => {
                    if(options.onDraw) options.onDraw(time, length, note, instrument.envelope)
                    if(this.debug) console.log(note + ', ' + Time(length).toNotation())
                }, time+context.lookAhead)
                // if(options.onDraw) options.onDraw(time+context.lookAhead, length, note, instrument.envelope)

            } else if(this.debug){
                if(length <= 0)
                    console.log("%cZERO LENGTH", 'color: red')

                console.log('| ' + Time(length).toNotation())
            }
            return length

            // this.id = Transport.schedule(playNote, length + time - context.lookAhead)
        }.bind(this)

        let buffer = 0.5;

        let minSecs = toSecs(quantize || "64n")

        let processTime = 0;
        let process = (time) => {
            
            //repeat till fills buffer time
            while(processTime < time+buffer){
                //jump up if behind
                if(processTime < time){
                    processTime = time+buffer
                }

                let length = playNote(processTime);
                if(length < minSecs)
                    length = minSecs

                processTime += length
            }
        }

        process(0)
        Transport.scheduleRepeat(process, "64n")

        //start it
        // this.id = Transport.schedule(process, 0)
    }

    Cancel() {
        Transport.clear(this.id)
        this.instrument.volume.value = 0
        return this
    }

    Debug(){
        this.debug = true
        return this
    }
}

/**
 * 
 * @param {Number} speed in seconds
 * @param {Number} [width] 
 * @param {Number} [start] 
 */
export function perlinNoise(speed, start, width, seed) {
    width = width || 1
    start = start || 0
    seed = seed || newSeed()
    return () => start + perlin.noise(seed + seconds() * speed) * width
}

/**
 * 
 * @param {Function} getMean 
 * @param {Number} dev 
 */
export function movingMean(getMean, dev) {
    return () => randomNormal(getMean(), dev)()
}

export function staticReturn(val) {
    return () => val;
}