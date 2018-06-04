import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import './style.css'
import {Note} from 'tonal'

import Perlin from "proc-noise"
import {perlinNoise, seconds} from './instrument'

let perlin = new Perlin(Math.random())

import P5 from 'p5'

const p5 = new P5(p5 => {
    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
        canvas.parent("p5Container")
        // p5.setAttributes('antialias', true);

        p5.colorMode(p5.HSB)
        p5.ellipseMode(p5.RADIUS)
    }

    p5.draw = () => {
        p5.fill(0, 0, 100)

        circles = circles.filter(val => val(p5))
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }
})

let circles = []

export function doCircle(start, length, note, envelope){
    let noteHz = Note.freq(note)
    let i = circles.length
    let getX = perlinNoise(noteHz/2000, 0, p5.windowWidth, noteHz*9999)
    let getY = perlinNoise(noteHz/2000, 0, p5.windowHeight, noteHz*99991)

    circles.push(p5 => {
        let progress = (seconds()-start)/length
        let x = getX()
        let y = getY()

        if(progress < 0){
            return true
        } else if(1 < progress){
            p5.noStroke()
            p5.fill(0, 0, 0, 0.5)
            p5.ellipse(x, y, 100, 100)
            return false
        }

        let val = envelope.value - 0.3*progress
        
        p5.strokeWeight(20)
        p5.stroke(noteHz, 50+50*progress, 80)
        p5.noFill()
        p5.ellipse(x, y, val*100, val*100)

        p5.fill(0, 0, 0)
        p5.ellipse(x, y, 5, 5)

        return true
    })
}

export default class SynthEditor{

    /**
     * @param {HTMLElement|String} container
     * @param synth
     */
    constructor(container, synth){
        if(typeof container == 'string'){
            container = document.getElementById(container)
        }

        let options = synth.get()

        let editor = new JSONEditor(container, {onChange: () => {
            try{
                let newOpts = editor.get();
                
                synth.set(newOpts)
                options = newOpts
                console.log("JSON Applied")
            } catch(err) {
                synth.set(options)
                // console.log(err)
                // melodySynth.set(melodySynthOpts)
            }
        }}, options);

        editor.expandAll()
    }
}