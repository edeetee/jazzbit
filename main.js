/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([34,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var instrument_namespaceObject = {};
__webpack_require__.d(instrument_namespaceObject, "toSecs", function() { return toSecs; });
__webpack_require__.d(instrument_namespaceObject, "distToNote", function() { return distToNote; });
__webpack_require__.d(instrument_namespaceObject, "floatToNote", function() { return floatToNote; });
__webpack_require__.d(instrument_namespaceObject, "seconds", function() { return seconds; });
__webpack_require__.d(instrument_namespaceObject, "waitForTime", function() { return waitForTime; });
__webpack_require__.d(instrument_namespaceObject, "Repeater", function() { return instrument_Repeater; });
__webpack_require__.d(instrument_namespaceObject, "perlinNoise", function() { return perlinNoise; });
__webpack_require__.d(instrument_namespaceObject, "movingMean", function() { return movingMean; });
__webpack_require__.d(instrument_namespaceObject, "staticReturn", function() { return staticReturn; });

// EXTERNAL MODULE: ./node_modules/tone/build/Tone.js
var Tone = __webpack_require__(1);
var Tone_default = /*#__PURE__*/__webpack_require__.n(Tone);

// EXTERNAL MODULE: ./node_modules/tonal/index.js + 4 modules
var tonal = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/tonal-key/build/es6.js
var es6 = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/d3-random/index.js + 7 modules
var d3_random = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/noisejs/index.js
var noisejs = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/proc-noise/lib/proc-noise.js
var proc_noise = __webpack_require__(12);
var proc_noise_default = /*#__PURE__*/__webpack_require__.n(proc_noise);

// CONCATENATED MODULE: ./src/instrument.js





function toSecs(notation) {
    return Object(Tone["Time"])(notation).toSeconds()
}

// let noise = new Noise(Math.random())
let perlin = new proc_noise_default.a(Math.random())

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
function distToNote(chordArr, dist, baseVal) {
    baseVal = baseVal || 0

    return floatToNote(chordArr, dist() + baseVal)
}

/**@param {Number[]} chordArr
 * @param {String} val
 * @return {String}
 */
function floatToNote(chordArr, val) {
    let octave = Math.floor(val)
    let i = Math.floor((val - octave) * chordArr.length)

    return chordArr[i] + String(octave)
}

function seconds() {
    return Tone["Transport"].seconds
}

function waitForTime(time) {
    return new Promise(resolve => Tone["Transport"].schedule(resolve, time));
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

class instrument_Repeater {
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

            //quantize if exists
            if (quantize){
                length = Object(Tone["Time"])(length).quantize(quantize)
                if(length <= 0){
                    length = toSecs(quantize)
                }
            }

            if (Math.random() < getProbability() && 0 < length) {
                let note = getNote()
                // if(this.debug) console.log(note + ', ' + Time(length).toNotation())
                instrument.triggerAttackRelease(note, length, time)
                
                Tone["Draw"].schedule(() => {
                    if(options.onDraw) options.onDraw(time, length, note, instrument.envelope)
                    if(this.debug) console.log(note + ', ' + Object(Tone["Time"])(length).toNotation())
                }, time+Tone["context"].lookAhead)
                // if(options.onDraw) options.onDraw(time+context.lookAhead, length, note, instrument.envelope)

            } else if(this.debug){
                if(length <= 0)
                    console.log("%cZERO LENGTH", 'color: red')

                console.log('| ' + Object(Tone["Time"])(length).toNotation())
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
        Tone["Transport"].scheduleRepeat(process, "64n")

        //start it
        // this.id = Transport.schedule(process, 0)
    }

    Cancel() {
        Tone["Transport"].clear(this.id)
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
function perlinNoise(speed, start, width, seed) {
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
function movingMean(getMean, dev) {
    return () => Object(d3_random["a" /* randomNormal */])(getMean(), dev)()
}

function staticReturn(val) {
    return () => val;
}
// EXTERNAL MODULE: ./node_modules/jsoneditor/index.js
var jsoneditor = __webpack_require__(30);
var jsoneditor_default = /*#__PURE__*/__webpack_require__.n(jsoneditor);

// EXTERNAL MODULE: ./node_modules/jsoneditor/dist/jsoneditor.min.css
var jsoneditor_min = __webpack_require__(40);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/p5/lib/p5.js
var lib_p5 = __webpack_require__(29);
var p5_default = /*#__PURE__*/__webpack_require__.n(lib_p5);

// CONCATENATED MODULE: ./src/gui.js








let gui_perlin = new proc_noise_default.a(Math.random())



const gui_p5 = new p5_default.a(p5 => {
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

function circleDrawer(maxRadius, backgroundOnChange, middleWidth){
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

        note = ( tonal["b" /* Note */].midi(newNote) || newNote.reduce((prev, note) => prev+tonal["b" /* Note */].midi(note), 0)/newNote.length )/12
        
        let speed = note*note*0.002
        getX = perlinNoise(speed, 0, gui_p5.windowWidth, note*9999)
        getY = perlinNoise(speed, 0, gui_p5.windowHeight, note*19999)
    }
}

class gui_SynthEditor{

    /**
     * @param {HTMLElement|String} container
     * @param synth
     */
    constructor(container, synth){
        if(typeof container == 'string'){
            container = document.getElementById(container)
        }

        let options = synth.get()

        let editor = new jsoneditor_default.a(container, {
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
// CONCATENATED MODULE: ./src/index.js








var {staticReturn: src_staticReturn, perlinNoise: src_perlinNoise, Repeater: src_Repeater, floatToNote: src_floatToNote, toSecs: src_toSecs, movingMean: src_movingMean, seconds: src_seconds} = instrument_namespaceObject;

//visual logic
let bases = tonal["b" /* Note */].names(" b")
let key = bases[Math.floor(bases.length*Math.random())] + (Math.random()<0.5 ? " minor" : " major")
console.log("Key: " + key)
let chords = es6["a" /* chords */](key)

let i = 0;
let progressions = [[4,5,1], [2,5,1], [5,2,1], [3,2,1], [3,4,1]]
let progression = progressions[Math.floor(progressions.length*Math.random())]

let chord = tonal["a" /* Chord */].notes(chords[progression[0]])

Tone["Transport"].scheduleRepeat(time => {
    let newInt = progression[i]-1;
    i++;
    if(i == progression.length){
        progression = progressions[Math.floor(progressions.length*Math.random())]
        i = 0
    }
    // let chord = Note.simplify(chords[newInt]) + " minor blues"
    // console.log("CHORD: " + chord)
    // notes = Scale.notes(chord).map(Note.simplify).map(note => note)
    console.log("Chord: " + chords[newInt])
    chord = tonal["a" /* Chord */].notes(chords[newInt])
}, "4m")

let notes = tonal["c" /* Scale */].notes(key + ' blues')
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


Tone["Transport"].bpm.value = 70+50*Math.random();

//synthesisers

var melodySynth = new Tone["FMSynth"]({
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

var kickEff = new Tone_default.a.Distortion(0.2).toMaster();
var kickSynth = new Tone["MembraneSynth"]({
    octaves: 6,
    pitchDecay: src_toSecs("8n"),
    "envelope": {
        "attack": 0.2,
        "attackCurve": 'exponential',
        "release": 0.1
    }
})
kickSynth.connect(kickEff)

let cymbalSynth = new Tone_default.a.MetalSynth({
    
}).toMaster()

let effect = new Tone_default.a.Chorus(1/src_toSecs('4n'), 1/src_toSecs('2n'), 0.6).toMaster();
let bassSynth = new Tone_default.a.PolySynth(4, Tone_default.a.AMSynth)
bassSynth.set({
    harmonicity: 1,
    oscillator: {
        type: 'sine'
    }
})
bassSynth.connect(effect)

let src_editor = new gui_SynthEditor("jsoncontainer", kickSynth)

//instrument controllers

let percussionProb = src_perlinNoise(0.5, 0, 1)

new instrument_Repeater(kickSynth, {
    note: "C1",
    getLength: Object(d3_random["a" /* randomNormal */])(src_toSecs("8n"), src_toSecs("4n")),
    quantize: '8n',
    getProbability: percussionProb,
    probability: 1
}).Debug()

new instrument_Repeater(cymbalSynth, {
    note: "C1",
    getLength: Object(d3_random["a" /* randomNormal */])(src_toSecs("8n"), src_toSecs("4n")),
    quantize: '8n',
    getProbability: percussionProb,
    probability: 1
}).Debug()

new instrument_Repeater(bassSynth, {
    // notes: Chord.notes(chords[progression[0]]),
    // getNote: randomNormal(2, 0.5),
    getNote: () => getRandom(chord, 3).map(val => val+"3"),
    probability: 1,
    getLength: Object(d3_random["a" /* randomNormal */])(src_toSecs("1m"), src_toSecs("2n.")),
    quantize: '4n',
    onDraw: circleDrawer(null, 0.2, 1.5)
})

new instrument_Repeater(melodySynth, {
    notes: notes,
    getNote: src_movingMean(src_perlinNoise(0.1, 2.5, 4), 0.5),
    // getNote: perlinNoise(3, 3, 1),
    // getNote: () => seconds()/3,
    getProbability: src_perlinNoise(0.4, 0.4, 0.6),
    // probability: 1,
    getLength: src_movingMean(src_perlinNoise(0.4, src_toSecs("16n"), src_toSecs("4n")), src_toSecs("8n")),
    // length: toSecs('8n'),
    // quantize: '16n',
    // snap: "8n",
    onDraw: circleDrawer(50)
})

Tone["Transport"].swing = 1
Tone["context"].latencyHint =  true ? "playback" : undefined

//also starts transport
Tone["Transport"].start()

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "#jsoncontainer{\r\n    width: 400px;\r\n    position: absolute;\r\n    padding: 10px;\r\n    opacity: 0.4;\r\n    left: -400px;\r\n\r\n    transition: all 0.2s;\r\n}\r\n\r\n#jsoncontainer:hover {\r\n    opacity: 1;\r\n    left: 0px;\r\n}\r\n\r\n#jsoncontainer > * {\r\n    background: white;\r\n}\r\n\r\n#p5Container > * {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n}", ""]);

// exports


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map