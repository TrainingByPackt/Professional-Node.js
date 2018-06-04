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



