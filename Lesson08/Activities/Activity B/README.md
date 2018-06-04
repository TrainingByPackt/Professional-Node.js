# Exercise: Webpack ES2015 Transpiler

In this exercise we will demonstrate clearly how the transpiler (babel) functionality works to transpile ES2015 code into older code compatible with the browser.

We have taken an example from one of the earlier lessons. It includes a class syntax. 

```$javascript
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
```

You will need to:

* Set up your `webpack.config.js` configuration to point to the `src/trafficlights.js` file
* Include the usual `package.json` files and pull in the correct babel libraries necessary
* Run webpack to build the `dist/bundle.js` file
* Look at the `dist/bundle.js` file and see that the syntax has now been transpiled to code that is compatible
* Check that the bundle file still works correctly...
```
node dist/bundle.js
➜  dist git:(master) ✗ node bundle.js
Car is on the move!
Lights are green
Lights are amber
Car is slowing down!
Lights are red
Car is stopped!
```