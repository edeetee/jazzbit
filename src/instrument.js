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

let start = Transport.seconds
export function seconds() {
    return Transport.seconds - start
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
        let {quantize, snap} = options;
        this.note = options.note;
        this.notes = options.notes;

        this.note = options.note

        let getLength = options.length ? () => options.length : 
            options.getLength

        let getProbability = options.probability ? () => options.probability : 
            options.getProbability

        let getNote = this.note ? () => options.note : 
        this.notes ? () => floatToNote(this.notes, options.getNote()) : 
                options.getNote

        let seed = newSeed()
        instrument.toMaster()
        instrument.sync()
        this.instrument = instrument

        //transport callback
        let playNote = function (time) {
            let length = Math.max(0, getLength())

            //quantize if exists
            if (quantize){
                length = Time(length).quantize(quantize)
                if(length <= 0){
                    length = toSecs(quantize)
                }
            }

            if (Math.random() < getProbability() && 0 < length) {
                let note = getNote()
                instrument.triggerAttackRelease(note, length, time)
                
                if(this.debug) console.log(note + ', ' + Time(length).toNotation())
                if(options.onDraw) options.onDraw(time, length, note, instrument.envelope)

            } else if(this.debug){
                if(length <= 0)
                    console.log("%cZERO LENGTH", 'color: red')

                console.log('| ' + Time(length).toNotation())
            }
            return length

            // this.id = Transport.schedule(playNote, length + time - context.lookAhead)
        }.bind(this)

        let buffer = 1;

        let snapSecs = toSecs(options.snap)

        let processTime = 0;
        let process = () => {
            // console.log(Transport.seconds+buffer)
            // console.log(processTime < Transport.seconds+buffer)
            
            //repeat till fills buffer time
            while(processTime < Transport.seconds+buffer){
                //jump up if behind
                if(processTime < Transport.seconds){
                    console.log("jumped buffer")
                    processTime = Transport.seconds+buffer
                }

                let length = playNote(processTime);
                if(options.snap)
                    length = Math.max(Math.round(length/snapSecs)*snapSecs, snapSecs)

                processTime += length
            }
            this.id = Transport.schedule(process, Transport.seconds+buffer*0.01)
        }

        //start
        process()

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