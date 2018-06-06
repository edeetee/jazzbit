import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import './style.css'
import {Note} from 'tonal'

import Perlin from "proc-noise"
import {perlinNoise, seconds, toSecs} from './instrument'

let perlin = new Perlin(Math.random())

import P5 from 'p5'

const p5 = new P5(p5 => {
    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
        p5.windowResized()
        canvas.parent("p5Container")
        // p5.setAttributes('antialias', true);

        p5.colorMode(p5.HSB)
        p5.ellipseMode(p5.RADIUS)
    }

    p5.draw = () => {
        p5.fill(0, 0, 100)
        draws.forEach(draw => draw(p5))
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
        p5.background(0,0,0)
    }
})

let draws = []

export function circleDrawer(maxRadius, backgroundOnChange, middleWidth){
    let changed = false;

    let start;
    let length;
    let getX;
    let getY;
    let note;
    let envelope;

    let pulse = toSecs("8n");
    
    maxRadius = maxRadius || 100;

    draws.push(p5 => {
        if(!start)
            return
            
        let progress = (seconds()-start)/length

        if(progress < 0)
            return

        let x = getX()
        let y = getY()

        if(changed && backgroundOnChange){
            p5.noStroke()
            p5.fill(0, 0, 0, 0.5)
            // p5.ellipse(x, y, maxRadius, maxRadius)
            p5.background(0,0,0, backgroundOnChange)
            changed = false;
        }

        if(1 < progress)
            return

        let val = envelope ? envelope.value : 1-progress*0.2+0.03*Math.sin(seconds()/pulse*Math.PI-Math.PI)
        let radius = maxRadius*val

        let color = p5.color(note*360%360, 100*val, 90)
        
        p5.strokeWeight(7)
        p5.stroke(color)
        p5.noFill()
        p5.ellipse(x, y, radius, radius)

        if(middleWidth){
            p5.noStroke()
            p5.fill('white')
            p5.ellipse(x, y, middleWidth, middleWidth)
        }
    })

    return (newStart, newLength, newNote, newEnvelope) => {
        changed = true
        length = newLength
        start = newStart
        envelope = newEnvelope

        note = ( Note.midi(newNote) || newNote.reduce((prev, note) => prev+Note.midi(note), 0)/newNote.length )/12
        
        let speed = note*note*0.002
        getX = perlinNoise(speed, 0, p5.windowWidth, note*9999)
        getY = perlinNoise(speed, 0, p5.windowHeight, note*19999)
    }
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

        let editor = new JSONEditor(container, {
            mode: 'form',
            onChange: () => {
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
            }
        }, options);

        editor.expandAll()
    }
}