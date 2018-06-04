const Saucepan = require('./Saucepan');
const Stove = require('./Stove');
const Tap = require('./Tap');
const Water = require('./Water');
const CartonOfEggs = require('./CartonOfEggs');
const Egg = require('./Egg');

module.exports = class Person {

  constructor() {

  }

  static retrieveSaucepanFromCupboard() {
    console.log("Retrieving saucepan from Cupboard");
    return new Saucepan();
  }

  static pickupCartonOfEggs() {
    console.log("Picking up a carton of Eggs");
    return new CartonOfEggs();
  }

  static locateStove() {
    const stove = new Stove();
    console.log("Locating the " + stove.name);
    return stove;
  }

  static locateTap() {
    const tap = new Tap();
    console.log("Locating the " + tap.name);
    return tap;
  }

  pourInto(liquid, equipment) {
    console.log("Pouring " + liquid.name + " into " + equipment.name);
  }

  placeOn(utility, equipment) {
    console.log("Placing " + equipment.name + " on " + utility.name);
  }

  turnHeatTo(equipment, temperature) {
    console.log('Temp', temperature);
    console.log("Turn heat for "+ equipment.name + " to " + temperature);
  }

  waitUntil(state) {
    console.log("Waiting until " + state);
  }

  turnOn(utility) {
    console.log("Turning on " + utility.name);
    return new Water();
  }

  putOn(utensil, egg) {
    console.log("Putting the " + egg.name + " on the " + utensil.name);
  }

  place(egg, equipment) {
    console.log("Place " + egg.name + " in the " + equipment.name);
  }

  crackInto(egg, equipment) {
    console.log("Crack " + egg.name + " into " + equipment.name);
  }

  tip(egg, equipment) {
    console.log("Tip " + egg.name + " into " + equipment.name);
  }

  wait(seconds) {
    console.log("Waiting for " + seconds + " seconds");
  }

  turnOff(utility) {
    console.log("Turning off " + utility.name);
  }

  lift(egg, utensil) {
    console.log("Lifting " + egg.name + " using " + utensil.name);
  }

  drain(egg, utensil) {
    console.log("Draining " + egg.name + " on to " + utensil.name);
  }

  removeFrom(egg, utensil) {
    console.log("Remove " + egg.name + " from " + utensil.name);
  }
};