const EventEmitter = require('events').EventEmitter;

'use strict';

class TrafficLights {

    constructor(colour, car) {
        this.emitter = new EventEmitter();
        this.setLights(colour);

        // add event handling for emitter
        this.emitter
            .on('moving', () => car.changeState('move'))
            .on('slowing', () => car.changeState('slow'))
            .on('stopping', () => car.changeState('stop'));
    }

    setLights(colour) {
        this.colour = colour;

        console.log("Lights are " + colour);
        // emit events
        if (this.colour === 'green') {
            this.emitter.emit('moving');
        } else if (this.colour === 'amber') {
            this.emitter.emit('slowing');
        } else if (this.colour === 'red') {
            this.emitter.emit('stopping');
        } else {
            console.log("Not a valid traffic light colour - " + colour);
        }
    }
}

class Car {
    constructor(state) {
        this.changeState(state);
    }

    changeState(state) {
        this.state = state;
        if (this.state === 'move') {
            console.log('Car is on the move!');
        } else if (this.state === 'slow') {
            console.log('Car is slowing down!');
        } else if (this.state === 'stop') {
            console.log('Car is stopped!');
        }
    }
}

function startTraffic(state) {
    let car = new Car(state);
    let trafficLights = new TrafficLights('green', car);

    trafficLights.setLights("amber");
    trafficLights.setLights("red");
}

startTraffic("move");