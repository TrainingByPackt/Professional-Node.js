const EventEmitter = require('events').EventEmitter;

'use strict';

class TrafficLights extends EventEmitter {

  constructor(colour, car) {
    super();
    this.changeLights(colour);
  }

  changeLights(colour) {
    this.colour = colour;

    console.log("Lights are " + colour);
    // emit events
    if (this.colour === 'green') {
      this.emit('moving');
    } else if (this.colour === 'amber') {
      this.emit('slowing');
    } else if (this.colour === 'red') {
      this.emit('stopping');
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

  // add initial car state
  // implement TrafficLights class and register events
  let car = new Car(state);

  let trafficLights = new TrafficLights('green', car)
      .on('moving', () => car.changeState('move'))
      .on('slowing', () => car.changeState('slow'))
      .on('stopping', () => car.changeState('stop'));

  trafficLights.changeLights("amber");
  trafficLights.changeLights("red");
}

startTraffic("move");
