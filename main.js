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
var tonal = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/tonal-key/build/es6.js
var es6 = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/d3-random/index.js + 7 modules
var d3_random = __webpack_require__(11);

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

let instrument_start = Tone["Transport"].seconds
function seconds() {
    return Tone["Transport"].seconds - instrument_start
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
                length = Object(Tone["Time"])(length).quantize(quantize)
                if(length <= 0){
                    length = toSecs(quantize)
                }
            }

            if (Math.random() < getProbability() && 0 < length) {
                let note = getNote()
                instrument.triggerAttackRelease(note, length, time)
                
                if(this.debug) console.log(note + ', ' + Object(Tone["Time"])(length).toNotation())
                if(options.onDraw) options.onDraw(time, length, note, instrument.envelope)

            } else if(this.debug){
                if(length <= 0)
                    console.log("%cZERO LENGTH", 'color: red')

                console.log('| ' + Object(Tone["Time"])(length).toNotation())
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
            while(processTime < Tone["Transport"].seconds+buffer){
                //jump up if behind
                if(processTime < Tone["Transport"].seconds){
                    console.log("jumped buffer")
                    processTime = Tone["Transport"].seconds+buffer
                }

                let length = playNote(processTime);
                if(options.snap)
                    length = Math.max(Math.round(length/snapSecs)*snapSecs, snapSecs)

                processTime += length
            }
            this.id = Tone["Transport"].schedule(process, Tone["Transport"].seconds+buffer*0.01)
        }

        //start
        process()

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

function doCircle(start, length, note, envelope){
    let noteHz = tonal["b" /* Note */].freq(note)
    let i = circles.length
    let getX = perlinNoise(noteHz/2000, 0, gui_p5.windowWidth, noteHz*9999)
    let getY = perlinNoise(noteHz/2000, 0, gui_p5.windowHeight, noteHz*99991)

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

        let editor = new jsoneditor_default.a(container, {onChange: () => {
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
// CONCATENATED MODULE: ./src/index.js








var {staticReturn: src_staticReturn, perlinNoise: src_perlinNoise, Repeater: src_Repeater, floatToNote: src_floatToNote, toSecs: src_toSecs, movingMean: src_movingMean, seconds: src_seconds} = instrument_namespaceObject;

//visual logic

let chords = es6["a" /* chords */]("C minor")
// console.log(Chord.notes(chords[0]))
let notes = getChord(3)

function getChord(number){
    return tonal["a" /* Chord */].notes(chords[number-1]).map(tonal["b" /* Note */].simplify)
}

// var slider = document.getElementById('slider')
// slider.addEventListener('change', updateBpm)

// function updateBpm() {
//     Transport.bpm.value = slider.valueAsNumber;
//     Transport.stop()
//     Transport.start()
// }

Tone["Transport"].bpm.value = 100;

//synthesisers

var melodySynth = new Tone["FMSynth"]({
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

var kickSynth = new Tone["MembraneSynth"]({
    envelope: {
        attack: 0.01,
        attackCurve: 'exponential'
    }
})

let bassSynth = new Tone_default.a.AMSynth({
    oscillator: {
        type: 'sine'
    }
});

let src_editor = new gui_SynthEditor("jsoncontainer", melodySynth)

//instrument controllers

// new Instrument.Repeater(kickSynth, {
//     note: "C-1",
//     length: "8n",
//     getProbability: perlinNoise(0.3, 0.2, 0.8),
//     probability: 1
// })

var backing = new instrument_Repeater(bassSynth, {
    notes: notes,
    getNote: src_movingMean(src_perlinNoise(0.2, 1, 1), 0.3),
    probability: 1,
    getLength: Object(d3_random["a" /* randomNormal */])(src_toSecs("1m"), src_toSecs("2n")),
    quantize: '4n',
    onDraw: doCircle
}).Debug()

var melody = new instrument_Repeater(melodySynth, {
    notes: notes,
    getNote: src_movingMean(src_perlinNoise(0.2, 2.5, 4), 0.2),
    // getNote: perlinNoise(3, 3, 1),
    // getNote: () => seconds()/3,
    // getProbability: movingMean(perlinNoise(1, 0.5, 0.4), 0.1),
    probability: 1,
    getLength: Object(d3_random["a" /* randomNormal */])(src_toSecs("8n"), src_toSecs("64n")),
    length: src_toSecs('8n'),
    quantize: '16n',
    snap: "8n",
    onDraw: doCircle
})

let src_i = 0;
let intervals = [1, 6, 2, 5]
Tone["Transport"].scheduleRepeat(time => {
    let newInt = intervals[src_i++%intervals.length]-1;
    // let chord = Note.simplify(chords[newInt]) + " minor blues"
    // console.log("CHORD: " + chord)
    // notes = Scale.notes(chord).map(Note.simplify).map(note => note)
    console.log(chords[newInt])
    melody.notes = tonal["a" /* Chord */].notes(chords[newInt])
    // backing.notes = notes
}, "4m")

Tone["Transport"].swing = 0
Tone["context"].latencyHint =  true ? "playback" : undefined

//also starts transport
Tone["Transport"].start()

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "#jsoncontainer{\r\n    width: 400px;\r\n    position: absolute;\r\n    padding: 10px;\r\n    opacity: 0.4;\r\n    left: -300px;\r\n\r\n    transition: all 0.2s;\r\n}\r\n\r\n#jsoncontainer:hover {\r\n    opacity: 1;\r\n    left: 0px;\r\n}\r\n\r\n#jsoncontainer > * {\r\n    background: white;\r\n}\r\n\r\n#p5Container > * {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzc1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSx5Qjs7Ozs7OztBQ3ZIQTtBQUNBOzs7QUFHQTtBQUNBLHdDQUF5QyxxQkFBcUIsMkJBQTJCLHNCQUFzQixxQkFBcUIscUJBQXFCLGlDQUFpQyxLQUFLLDhCQUE4QixtQkFBbUIsa0JBQWtCLEtBQUssNEJBQTRCLDBCQUEwQixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLOztBQUVyYTs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszNCwwXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFRyYW5zcG9ydCwgVGltZSwgRXZlbnQsIERyYXcsIGNvbnRleHQgfSBmcm9tICd0b25lJ1xyXG5pbXBvcnQgTm9pc2UgZnJvbSAnbm9pc2VqcydcclxuaW1wb3J0IFBlcmxpbiBmcm9tIFwicHJvYy1ub2lzZVwiXHJcbmltcG9ydCB7cmFuZG9tTm9ybWFsfSBmcm9tICdkMy1yYW5kb20nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9TZWNzKG5vdGF0aW9uKSB7XHJcbiAgICByZXR1cm4gVGltZShub3RhdGlvbikudG9TZWNvbmRzKClcclxufVxyXG5cclxuLy8gbGV0IG5vaXNlID0gbmV3IE5vaXNlKE1hdGgucmFuZG9tKCkpXHJcbmxldCBwZXJsaW4gPSBuZXcgUGVybGluKE1hdGgucmFuZG9tKCkpXHJcblxyXG5mdW5jdGlvbiB0aW1lTWFwKHN0YXJ0LCBsZW5ndGgsIGZyb20sIHRvKSB7XHJcbiAgICB0byA9IHR5cGVvZiB0byA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogdG9cclxuICAgIGZyb20gPSBmcm9tIHx8IDBcclxuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odG8sIE1hdGgubWF4KGZyb20gKyB0byAqIChEYXRlLm5vdygpIC0gc3RhcnQpIC8gbGVuZ3RoLCBmcm9tKSlcclxufVxyXG4vKipAcGFyYW0ge1N0cmluZ1tdfSBjaG9yZEFyclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXN0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYmFzZVZhbF1cclxuICogQHJldHVybiB7U3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RUb05vdGUoY2hvcmRBcnIsIGRpc3QsIGJhc2VWYWwpIHtcclxuICAgIGJhc2VWYWwgPSBiYXNlVmFsIHx8IDBcclxuXHJcbiAgICByZXR1cm4gZmxvYXRUb05vdGUoY2hvcmRBcnIsIGRpc3QoKSArIGJhc2VWYWwpXHJcbn1cclxuXHJcbi8qKkBwYXJhbSB7TnVtYmVyW119IGNob3JkQXJyXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcclxuICogQHJldHVybiB7U3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsb2F0VG9Ob3RlKGNob3JkQXJyLCB2YWwpIHtcclxuICAgIGxldCBvY3RhdmUgPSBNYXRoLmZsb29yKHZhbClcclxuICAgIGxldCBpID0gTWF0aC5mbG9vcigodmFsIC0gb2N0YXZlKSAqIGNob3JkQXJyLmxlbmd0aClcclxuXHJcbiAgICByZXR1cm4gY2hvcmRBcnJbaV0gKyBTdHJpbmcob2N0YXZlKVxyXG59XHJcblxyXG5sZXQgc3RhcnQgPSBUcmFuc3BvcnQuc2Vjb25kc1xyXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kcygpIHtcclxuICAgIHJldHVybiBUcmFuc3BvcnQuc2Vjb25kcyAtIHN0YXJ0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yVGltZSh0aW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBUcmFuc3BvcnQuc2NoZWR1bGUocmVzb2x2ZSwgdGltZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdTZWVkKCl7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDk5OTk5XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXBlYXRlck9wdGlvbnNcclxuICogXHJcbiAqIEBwcm9wIHtGdW5jdGlvbn0gW2dldFByb2JhYmlsaXR5XVxyXG4gKiBAcHJvcCB7TnVtYmVyfSBbcHJvYmFiaWxpdHldXHJcbiAqIFxyXG4gKiBAcHJvcCB7U3RyaW5nfSBbcXVhbnRpemVdXHJcbiAqIFxyXG4gKiBAcHJvcCB7U3RyaW5nW119IFtub3Rlc11cclxuICogQHByb3Age0Z1bmN0aW9ufSBbZ2V0Tm90ZV1cclxuICogXHJcbiAqIEBwcm9wIHtTdHJpbmd9IFtub3RlXVxyXG4gKiBcclxuICogQHByb3Age0Z1bmN0aW9ufSBbZ2V0TGVuZ3RoXVxyXG4gKiBAcHJvcCB7U3RyaW5nfSBbbGVuZ3RoXVxyXG4gKiBcclxuICogQHByb3Age1N0cmluZ30gW3NuYXBdIHNuYXAgdGhlIHN0YXJ0IG9mIGVhY2ggbm90ZVxyXG4gKiBcclxuICogQHByb3Age0Z1bmN0aW9ufSBvbkRyYXdcclxuICogXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcGVhdGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGluc3RydW1lbnRcclxuICAgICAqIEBwYXJhbSB7UmVwZWF0ZXJPcHRpb25zfSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGluc3RydW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBsZXQge3F1YW50aXplLCBzbmFwfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ub3RlID0gb3B0aW9ucy5ub3RlO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBvcHRpb25zLm5vdGVzO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGUgPSBvcHRpb25zLm5vdGVcclxuXHJcbiAgICAgICAgbGV0IGdldExlbmd0aCA9IG9wdGlvbnMubGVuZ3RoID8gKCkgPT4gb3B0aW9ucy5sZW5ndGggOiBcclxuICAgICAgICAgICAgb3B0aW9ucy5nZXRMZW5ndGhcclxuXHJcbiAgICAgICAgbGV0IGdldFByb2JhYmlsaXR5ID0gb3B0aW9ucy5wcm9iYWJpbGl0eSA/ICgpID0+IG9wdGlvbnMucHJvYmFiaWxpdHkgOiBcclxuICAgICAgICAgICAgb3B0aW9ucy5nZXRQcm9iYWJpbGl0eVxyXG5cclxuICAgICAgICBsZXQgZ2V0Tm90ZSA9IHRoaXMubm90ZSA/ICgpID0+IG9wdGlvbnMubm90ZSA6IFxyXG4gICAgICAgIHRoaXMubm90ZXMgPyAoKSA9PiBmbG9hdFRvTm90ZSh0aGlzLm5vdGVzLCBvcHRpb25zLmdldE5vdGUoKSkgOiBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZ2V0Tm90ZVxyXG5cclxuICAgICAgICBsZXQgc2VlZCA9IG5ld1NlZWQoKVxyXG4gICAgICAgIGluc3RydW1lbnQudG9NYXN0ZXIoKVxyXG4gICAgICAgIGluc3RydW1lbnQuc3luYygpXHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudFxyXG5cclxuICAgICAgICAvL3RyYW5zcG9ydCBjYWxsYmFja1xyXG4gICAgICAgIGxldCBwbGF5Tm90ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBNYXRoLm1heCgwLCBnZXRMZW5ndGgoKSlcclxuXHJcbiAgICAgICAgICAgIC8vcXVhbnRpemUgaWYgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChxdWFudGl6ZSl7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBUaW1lKGxlbmd0aCkucXVhbnRpemUocXVhbnRpemUpXHJcbiAgICAgICAgICAgICAgICBpZihsZW5ndGggPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gdG9TZWNzKHF1YW50aXplKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IGdldFByb2JhYmlsaXR5KCkgJiYgMCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vdGUgPSBnZXROb3RlKClcclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnQudHJpZ2dlckF0dGFja1JlbGVhc2Uobm90ZSwgbGVuZ3RoLCB0aW1lKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRlYnVnKSBjb25zb2xlLmxvZyhub3RlICsgJywgJyArIFRpbWUobGVuZ3RoKS50b05vdGF0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLm9uRHJhdykgb3B0aW9ucy5vbkRyYXcodGltZSwgbGVuZ3RoLCBub3RlLCBpbnN0cnVtZW50LmVudmVsb3BlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuZGVidWcpe1xyXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1pFUk8gTEVOR1RIXCIsICdjb2xvcjogcmVkJylcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfCAnICsgVGltZShsZW5ndGgpLnRvTm90YXRpb24oKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmlkID0gVHJhbnNwb3J0LnNjaGVkdWxlKHBsYXlOb3RlLCBsZW5ndGggKyB0aW1lIC0gY29udGV4dC5sb29rQWhlYWQpXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIGxldCBidWZmZXIgPSAxO1xyXG5cclxuICAgICAgICBsZXQgc25hcFNlY3MgPSB0b1NlY3Mob3B0aW9ucy5zbmFwKVxyXG5cclxuICAgICAgICBsZXQgcHJvY2Vzc1RpbWUgPSAwO1xyXG4gICAgICAgIGxldCBwcm9jZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUcmFuc3BvcnQuc2Vjb25kcytidWZmZXIpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3NUaW1lIDwgVHJhbnNwb3J0LnNlY29uZHMrYnVmZmVyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9yZXBlYXQgdGlsbCBmaWxscyBidWZmZXIgdGltZVxyXG4gICAgICAgICAgICB3aGlsZShwcm9jZXNzVGltZSA8IFRyYW5zcG9ydC5zZWNvbmRzK2J1ZmZlcil7XHJcbiAgICAgICAgICAgICAgICAvL2p1bXAgdXAgaWYgYmVoaW5kXHJcbiAgICAgICAgICAgICAgICBpZihwcm9jZXNzVGltZSA8IFRyYW5zcG9ydC5zZWNvbmRzKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImp1bXBlZCBidWZmZXJcIilcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVGltZSA9IFRyYW5zcG9ydC5zZWNvbmRzK2J1ZmZlclxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBwbGF5Tm90ZShwcm9jZXNzVGltZSk7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNuYXApXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5yb3VuZChsZW5ndGgvc25hcFNlY3MpKnNuYXBTZWNzLCBzbmFwU2VjcylcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzVGltZSArPSBsZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlkID0gVHJhbnNwb3J0LnNjaGVkdWxlKHByb2Nlc3MsIFRyYW5zcG9ydC5zZWNvbmRzK2J1ZmZlciowLjAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zdGFydFxyXG4gICAgICAgIHByb2Nlc3MoKVxyXG5cclxuICAgICAgICAvL3N0YXJ0IGl0XHJcbiAgICAgICAgLy8gdGhpcy5pZCA9IFRyYW5zcG9ydC5zY2hlZHVsZShwcm9jZXNzLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIENhbmNlbCgpIHtcclxuICAgICAgICBUcmFuc3BvcnQuY2xlYXIodGhpcy5pZClcclxuICAgICAgICB0aGlzLmluc3RydW1lbnQudm9sdW1lLnZhbHVlID0gMFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgRGVidWcoKXtcclxuICAgICAgICB0aGlzLmRlYnVnID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNwZWVkIGluIHNlY29uZHNcclxuICogQHBhcmFtIHtOdW1iZXJ9IFt3aWR0aF0gXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmxpbk5vaXNlKHNwZWVkLCBzdGFydCwgd2lkdGgsIHNlZWQpIHtcclxuICAgIHdpZHRoID0gd2lkdGggfHwgMVxyXG4gICAgc3RhcnQgPSBzdGFydCB8fCAwXHJcbiAgICBzZWVkID0gc2VlZCB8fCBuZXdTZWVkKClcclxuICAgIHJldHVybiAoKSA9PiBzdGFydCArIHBlcmxpbi5ub2lzZShzZWVkICsgc2Vjb25kcygpICogc3BlZWQpICogd2lkdGhcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRNZWFuIFxyXG4gKiBAcGFyYW0ge051bWJlcn0gZGV2IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmluZ01lYW4oZ2V0TWVhbiwgZGV2KSB7XHJcbiAgICByZXR1cm4gKCkgPT4gcmFuZG9tTm9ybWFsKGdldE1lYW4oKSwgZGV2KSgpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aWNSZXR1cm4odmFsKSB7XHJcbiAgICByZXR1cm4gKCkgPT4gdmFsO1xyXG59IiwiaW1wb3J0IEpTT05FZGl0b3IgZnJvbSAnanNvbmVkaXRvcidcclxuaW1wb3J0ICdqc29uZWRpdG9yL2Rpc3QvanNvbmVkaXRvci5taW4uY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQge05vdGV9IGZyb20gJ3RvbmFsJ1xyXG5cclxuaW1wb3J0IFBlcmxpbiBmcm9tIFwicHJvYy1ub2lzZVwiXHJcbmltcG9ydCB7cGVybGluTm9pc2UsIHNlY29uZHN9IGZyb20gJy4vaW5zdHJ1bWVudCdcclxuXHJcbmxldCBwZXJsaW4gPSBuZXcgUGVybGluKE1hdGgucmFuZG9tKCkpXHJcblxyXG5pbXBvcnQgUDUgZnJvbSAncDUnXHJcblxyXG5jb25zdCBwNSA9IG5ldyBQNShwNSA9PiB7XHJcbiAgICBwNS5zZXR1cCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY2FudmFzID0gcDUuY3JlYXRlQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpXHJcbiAgICAgICAgY2FudmFzLnBhcmVudChcInA1Q29udGFpbmVyXCIpXHJcbiAgICAgICAgLy8gcDUuc2V0QXR0cmlidXRlcygnYW50aWFsaWFzJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHA1LmNvbG9yTW9kZShwNS5IU0IpXHJcbiAgICAgICAgcDUuZWxsaXBzZU1vZGUocDUuUkFESVVTKVxyXG4gICAgfVxyXG5cclxuICAgIHA1LmRyYXcgPSAoKSA9PiB7XHJcbiAgICAgICAgcDUuZmlsbCgwLCAwLCAxMDApXHJcblxyXG4gICAgICAgIGNpcmNsZXMgPSBjaXJjbGVzLmZpbHRlcih2YWwgPT4gdmFsKHA1KSlcclxuICAgIH1cclxuXHJcbiAgICBwNS53aW5kb3dSZXNpemVkID0gKCkgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KVxyXG4gICAgfVxyXG59KVxyXG5cclxubGV0IGNpcmNsZXMgPSBbXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvQ2lyY2xlKHN0YXJ0LCBsZW5ndGgsIG5vdGUsIGVudmVsb3BlKXtcclxuICAgIGxldCBub3RlSHogPSBOb3RlLmZyZXEobm90ZSlcclxuICAgIGxldCBpID0gY2lyY2xlcy5sZW5ndGhcclxuICAgIGxldCBnZXRYID0gcGVybGluTm9pc2Uobm90ZUh6LzIwMDAsIDAsIHA1LndpbmRvd1dpZHRoLCBub3RlSHoqOTk5OSlcclxuICAgIGxldCBnZXRZID0gcGVybGluTm9pc2Uobm90ZUh6LzIwMDAsIDAsIHA1LndpbmRvd0hlaWdodCwgbm90ZUh6Kjk5OTkxKVxyXG5cclxuICAgIGNpcmNsZXMucHVzaChwNSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gKHNlY29uZHMoKS1zdGFydCkvbGVuZ3RoXHJcbiAgICAgICAgbGV0IHggPSBnZXRYKClcclxuICAgICAgICBsZXQgeSA9IGdldFkoKVxyXG5cclxuICAgICAgICBpZihwcm9ncmVzcyA8IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZigxIDwgcHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICBwNS5ub1N0cm9rZSgpXHJcbiAgICAgICAgICAgIHA1LmZpbGwoMCwgMCwgMCwgMC41KVxyXG4gICAgICAgICAgICBwNS5lbGxpcHNlKHgsIHksIDEwMCwgMTAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWwgPSBlbnZlbG9wZS52YWx1ZSAtIDAuMypwcm9ncmVzc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodCgyMClcclxuICAgICAgICBwNS5zdHJva2Uobm90ZUh6LCA1MCs1MCpwcm9ncmVzcywgODApXHJcbiAgICAgICAgcDUubm9GaWxsKClcclxuICAgICAgICBwNS5lbGxpcHNlKHgsIHksIHZhbCoxMDAsIHZhbCoxMDApXHJcblxyXG4gICAgICAgIHA1LmZpbGwoMCwgMCwgMClcclxuICAgICAgICBwNS5lbGxpcHNlKHgsIHksIDUsIDUpXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW50aEVkaXRvcntcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U3RyaW5nfSBjb250YWluZXJcclxuICAgICAqIEBwYXJhbSBzeW50aFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHN5bnRoKXtcclxuICAgICAgICBpZih0eXBlb2YgY29udGFpbmVyID09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzeW50aC5nZXQoKVxyXG5cclxuICAgICAgICBsZXQgZWRpdG9yID0gbmV3IEpTT05FZGl0b3IoY29udGFpbmVyLCB7b25DaGFuZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld09wdHMgPSBlZGl0b3IuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN5bnRoLnNldChuZXdPcHRzKVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG5ld09wdHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBBcHBsaWVkXCIpXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzeW50aC5zZXQob3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIC8vIG1lbG9keVN5bnRoLnNldChtZWxvZHlTeW50aE9wdHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGVkaXRvci5leHBhbmRBbGwoKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRvbmUsIHsgTWVtYnJhbmVTeW50aCwgRk1TeW50aCwgVHJhbnNwb3J0LCBTeW50aCwgY29udGV4dCB9IGZyb20gJ3RvbmUnXHJcbmltcG9ydCB7IFNjYWxlLCBDaG9yZCwgTm90ZSB9IGZyb20gJ3RvbmFsJ1xyXG5pbXBvcnQgKiBhcyBLZXkgZnJvbSAndG9uYWwta2V5J1xyXG5pbXBvcnQge3JhbmRvbU5vcm1hbH0gZnJvbSAnZDMtcmFuZG9tJ1xyXG5cclxuaW1wb3J0ICogYXMgSW5zdHJ1bWVudCBmcm9tICcuL2luc3RydW1lbnQnXHJcbmltcG9ydCBTeW50aEVkaXRvciwge2RvQ2lyY2xlfSBmcm9tICcuL2d1aSdcclxuXHJcbnZhciB7c3RhdGljUmV0dXJuLCBwZXJsaW5Ob2lzZSwgUmVwZWF0ZXIsIGZsb2F0VG9Ob3RlLCB0b1NlY3MsIG1vdmluZ01lYW4sIHNlY29uZHN9ID0gSW5zdHJ1bWVudDtcclxuXHJcbi8vdmlzdWFsIGxvZ2ljXHJcblxyXG5sZXQgY2hvcmRzID0gS2V5LmNob3JkcyhcIkMgbWlub3JcIilcclxuLy8gY29uc29sZS5sb2coQ2hvcmQubm90ZXMoY2hvcmRzWzBdKSlcclxubGV0IG5vdGVzID0gZ2V0Q2hvcmQoMylcclxuXHJcbmZ1bmN0aW9uIGdldENob3JkKG51bWJlcil7XHJcbiAgICByZXR1cm4gQ2hvcmQubm90ZXMoY2hvcmRzW251bWJlci0xXSkubWFwKE5vdGUuc2ltcGxpZnkpXHJcbn1cclxuXHJcbi8vIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJylcclxuLy8gc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUJwbSlcclxuXHJcbi8vIGZ1bmN0aW9uIHVwZGF0ZUJwbSgpIHtcclxuLy8gICAgIFRyYW5zcG9ydC5icG0udmFsdWUgPSBzbGlkZXIudmFsdWVBc051bWJlcjtcclxuLy8gICAgIFRyYW5zcG9ydC5zdG9wKClcclxuLy8gICAgIFRyYW5zcG9ydC5zdGFydCgpXHJcbi8vIH1cclxuXHJcblRyYW5zcG9ydC5icG0udmFsdWUgPSAxMDA7XHJcblxyXG4vL3N5bnRoZXNpc2Vyc1xyXG5cclxudmFyIG1lbG9keVN5bnRoID0gbmV3IEZNU3ludGgoe1xyXG4gICAgXCJoYXJtb25pY2l0eVwiOiA4LFxyXG4gICAgXCJtb2R1bGF0aW9uSW5kZXhcIjogMTAsXHJcbiAgICBcIm9zY2lsbGF0b3JcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcInNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJlbnZlbG9wZVwiOiB7XHJcbiAgICAgICAgXCJhdHRhY2tcIjogMC4wMDEsXHJcbiAgICAgICAgXCJkZWNheVwiOiAyLFxyXG4gICAgICAgIFwic3VzdGFpblwiOiAwLjEsXHJcbiAgICAgICAgXCJyZWxlYXNlXCI6IDJcclxuICAgIH0sXHJcbiAgICBcIm1vZHVsYXRpb25cIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcInNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJtb2R1bGF0aW9uRW52ZWxvcGVcIjoge1xyXG4gICAgICAgIFwiYXR0YWNrXCI6IDAuMDAyLFxyXG4gICAgICAgIFwiZGVjYXlcIjogMC4yLFxyXG4gICAgICAgIFwic3VzdGFpblwiOiAwLFxyXG4gICAgICAgIFwicmVsZWFzZVwiOiAwLjJcclxuICAgIH1cclxufSlcclxuXHJcbnZhciBraWNrU3ludGggPSBuZXcgTWVtYnJhbmVTeW50aCh7XHJcbiAgICBlbnZlbG9wZToge1xyXG4gICAgICAgIGF0dGFjazogMC4wMSxcclxuICAgICAgICBhdHRhY2tDdXJ2ZTogJ2V4cG9uZW50aWFsJ1xyXG4gICAgfVxyXG59KVxyXG5cclxubGV0IGJhc3NTeW50aCA9IG5ldyBUb25lLkFNU3ludGgoe1xyXG4gICAgb3NjaWxsYXRvcjoge1xyXG4gICAgICAgIHR5cGU6ICdzaW5lJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBlZGl0b3IgPSBuZXcgU3ludGhFZGl0b3IoXCJqc29uY29udGFpbmVyXCIsIG1lbG9keVN5bnRoKVxyXG5cclxuLy9pbnN0cnVtZW50IGNvbnRyb2xsZXJzXHJcblxyXG4vLyBuZXcgSW5zdHJ1bWVudC5SZXBlYXRlcihraWNrU3ludGgsIHtcclxuLy8gICAgIG5vdGU6IFwiQy0xXCIsXHJcbi8vICAgICBsZW5ndGg6IFwiOG5cIixcclxuLy8gICAgIGdldFByb2JhYmlsaXR5OiBwZXJsaW5Ob2lzZSgwLjMsIDAuMiwgMC44KSxcclxuLy8gICAgIHByb2JhYmlsaXR5OiAxXHJcbi8vIH0pXHJcblxyXG52YXIgYmFja2luZyA9IG5ldyBJbnN0cnVtZW50LlJlcGVhdGVyKGJhc3NTeW50aCwge1xyXG4gICAgbm90ZXM6IG5vdGVzLFxyXG4gICAgZ2V0Tm90ZTogbW92aW5nTWVhbihwZXJsaW5Ob2lzZSgwLjIsIDEsIDEpLCAwLjMpLFxyXG4gICAgcHJvYmFiaWxpdHk6IDEsXHJcbiAgICBnZXRMZW5ndGg6IHJhbmRvbU5vcm1hbCh0b1NlY3MoXCIxbVwiKSwgdG9TZWNzKFwiMm5cIikpLFxyXG4gICAgcXVhbnRpemU6ICc0bicsXHJcbiAgICBvbkRyYXc6IGRvQ2lyY2xlXHJcbn0pLkRlYnVnKClcclxuXHJcbnZhciBtZWxvZHkgPSBuZXcgSW5zdHJ1bWVudC5SZXBlYXRlcihtZWxvZHlTeW50aCwge1xyXG4gICAgbm90ZXM6IG5vdGVzLFxyXG4gICAgZ2V0Tm90ZTogbW92aW5nTWVhbihwZXJsaW5Ob2lzZSgwLjIsIDIuNSwgNCksIDAuMiksXHJcbiAgICAvLyBnZXROb3RlOiBwZXJsaW5Ob2lzZSgzLCAzLCAxKSxcclxuICAgIC8vIGdldE5vdGU6ICgpID0+IHNlY29uZHMoKS8zLFxyXG4gICAgLy8gZ2V0UHJvYmFiaWxpdHk6IG1vdmluZ01lYW4ocGVybGluTm9pc2UoMSwgMC41LCAwLjQpLCAwLjEpLFxyXG4gICAgcHJvYmFiaWxpdHk6IDEsXHJcbiAgICBnZXRMZW5ndGg6IHJhbmRvbU5vcm1hbCh0b1NlY3MoXCI4blwiKSwgdG9TZWNzKFwiNjRuXCIpKSxcclxuICAgIGxlbmd0aDogdG9TZWNzKCc4bicpLFxyXG4gICAgcXVhbnRpemU6ICcxNm4nLFxyXG4gICAgc25hcDogXCI4blwiLFxyXG4gICAgb25EcmF3OiBkb0NpcmNsZVxyXG59KVxyXG5cclxubGV0IGkgPSAwO1xyXG5sZXQgaW50ZXJ2YWxzID0gWzEsIDYsIDIsIDVdXHJcblRyYW5zcG9ydC5zY2hlZHVsZVJlcGVhdCh0aW1lID0+IHtcclxuICAgIGxldCBuZXdJbnQgPSBpbnRlcnZhbHNbaSsrJWludGVydmFscy5sZW5ndGhdLTE7XHJcbiAgICAvLyBsZXQgY2hvcmQgPSBOb3RlLnNpbXBsaWZ5KGNob3Jkc1tuZXdJbnRdKSArIFwiIG1pbm9yIGJsdWVzXCJcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ0hPUkQ6IFwiICsgY2hvcmQpXHJcbiAgICAvLyBub3RlcyA9IFNjYWxlLm5vdGVzKGNob3JkKS5tYXAoTm90ZS5zaW1wbGlmeSkubWFwKG5vdGUgPT4gbm90ZSlcclxuICAgIGNvbnNvbGUubG9nKGNob3Jkc1tuZXdJbnRdKVxyXG4gICAgbWVsb2R5Lm5vdGVzID0gQ2hvcmQubm90ZXMoY2hvcmRzW25ld0ludF0pXHJcbiAgICAvLyBiYWNraW5nLm5vdGVzID0gbm90ZXNcclxufSwgXCI0bVwiKVxyXG5cclxuVHJhbnNwb3J0LnN3aW5nID0gMFxyXG5jb250ZXh0LmxhdGVuY3lIaW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcInBsYXliYWNrXCIgOiBcImJhbGFuY2VkXCJcclxuXHJcbi8vYWxzbyBzdGFydHMgdHJhbnNwb3J0XHJcblRyYW5zcG9ydC5zdGFydCgpIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjanNvbmNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG4gICAgbGVmdDogLTMwMHB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI2pzb25jb250YWluZXI6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNqc29uY29udGFpbmVyID4gKiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcDVDb250YWluZXIgPiAqIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9