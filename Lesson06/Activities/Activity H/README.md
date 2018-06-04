# Exercise - Template Recipe

As discussed earlier, the template pattern is used in situations where only a portion of the algorithm changes...

Let's take an example where we want to cook an egg.

We perform a lot of actions leading up to cooking an egg.

Let us compare boiling an egg with poaching an egg since the two recipes are fairly similar.

In both recipes we have to do the following as grouped actions...

## Saucepan
* Take a saucepan out of the cupboard
* Fill saucepan with water at the tap
* Place the saucepan on the stove
* Turn the stove heat on to maximum
* Heat the water until boiling
* Turn the heat down so it is simmering

## Retrieve Eggs
* Pick-up the carton of eggs
* Take an egg out of the carton

Now here is where it differs slightly.

*Boiled Egg Recipe*

* Put the egg on a spoon (this part is actually the same!)
* Place the egg carefully in the saucepan
* Leave the egg in for 5 minutes for a perfect runny yolk
* Remove the egg from the saucepan

*Poached Egg Recipe*

* Crack the egg into a bowl or a saucer
* Tip the egg into the pan
* Cook the egg for 2 minutes
* Turn off the heat
* Leave in the pan for 8 minutes
* Lift the egg out with a slotted spoon
* Drain it on kitchen paper

This is what the main file `cooking.js` looks like. Implement the

Using the template pattern implement the recipes. 

```$javascript
const PoachedEggRecipe = require('./PoachedEggRecipe');

const Person = require('./Person');
const person = new Person();

console.log("======================================");
console.log("Beginning to cook PoachedEggRecipe");
console.log("======================================");
const poachedEggRecipe = new PoachedEggRecipe(person);

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('initPoached', function() {
  poachedEggRecipe.prepareSaucepan()
                  .then(poachedEggRecipe.retrieveEgg())
                  .then(poachedEggRecipe.cook())
                  .catch((error) => console.log("Error: ", error));
});

eventEmitter.emit('initPoached');

console.log(" ");
console.log(" ");

console.log("======================================");
console.log("Beginning to cook BoiledEggRecipe");
console.log("======================================");
console.log(" ");

const BoiledEggRecipe = require('./BoiledEggRecipe');

const boiledEggRecipe = new BoiledEggRecipe(person);

eventEmitter.on('initBoiled', function() {
  boiledEggRecipe.prepareSaucepan()
                 .then(boiledEggRecipe.retrieveEgg())
                 .then(boiledEggRecipe.cook())
                 .catch((error) => console.log("Error: ", error));
});

eventEmitter.emit('initBoiled');

console.log(" ");
console.log(" ");
```

When fully implemented the above should produce the following output in the terminal:

```$bash
======================================
Beginning to cook PoachedEggRecipe
======================================
Retrieving saucepan from Cupboard
Locating the Stove
Locating the Tap
Turning on Tap
Pouring Water into Saucepan
Temp MAXIMUM
Turn heat for Stove to MAXIMUM
Waiting until BOILING
Temp SIMMERING
Turn heat for Stove to SIMMERING
Begin cooking egg
Crack Egg into Bowl
Tip Egg into Saucepan
Waiting for 2 seconds
Turning off Stove
Waiting for 2 seconds
Lifting Egg using Slotted Spoon
Draining Egg on to Kitchen Paper
 
 
======================================
Beginning to cook BoiledEggRecipe
======================================
 
Retrieving saucepan from Cupboard
Locating the Stove
Locating the Tap
Turning on Tap
Pouring Water into Saucepan
Temp MAXIMUM
Turn heat for Stove to MAXIMUM
Waiting until BOILING
Temp SIMMERING
Turn heat for Stove to SIMMERING
Begin cooking egg
Putting the Egg on the Slotted Spoon
Place Egg in the Saucepan
Waiting for 5 seconds
Remove Egg from Saucepan
```
