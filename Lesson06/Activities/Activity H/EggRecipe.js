const Person = require('./Person');
const Water = require('./Water');
const Temperature = require('./Temperature');
const sequence = require('./sequence');
const Promise = require('bluebird');
const Egg = require('./Egg');

module.exports = class EggRecipe {

  constructor(person) {
    this.person = person;
    this.saucepan = Person.retrieveSaucepanFromCupboard();
    this.stove = Person.locateStove();
    this.tap = Person.locateTap();
    this.egg = new Egg();

    Promise.promisifyAll(this.person);
  }

  prepareSaucepan() {
    const prepareSaucepanTasks = [
      this.person.turnOn(this.tap),
      this.person.pourInto(new Water(), this.saucepan),
      this.person.turnHeatTo(this.stove, Temperature.MAXIMUM),
      this.person.waitUntil('BOILING'),
      this.person.turnHeatTo(this.stove, Temperature.SIMMERING)
    ];

    return sequence(prepareSaucepanTasks);

    // return this.person.turnOn(this.tap)
    //          .then(this.person.pourInto(new Water(), this.saucepan))
    //          .then(this.person.placeOn(this.stove, this.saucepan))
    //          .then(this.person.turnHeatTo(this.stove, Temperature.MAXIMUM))
    //          .then(this.person.waitUntil('BOILING'))
    //          .then(this.person.turnHeatTo(this.stove, Temperature.SIMMERING))
    //          .catch((error) => console.log("Error: ", error));
  }

  retrieveEgg() {
    return new Egg();
  }

  cook(egg) {
    console.log("Begin cooking egg");
    return this._cook(egg);
  }

  _cook(egg) {
    throw new Error('_cookEgg() must be implemented');
  }
};