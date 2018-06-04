const EggRecipe = require('./EggRecipe');
const SlottedSpoon = require('./SlottedSpoon');
const sequence = require('./sequence');

module.exports = class BoiledEggRecipe extends EggRecipe {

  constructor(person) {
    super(person);
  }

  _cook() {
    const boiledEggTasks = [
      this.person.putOn(new SlottedSpoon(), this.egg),
      this.person.place(this.egg, this.saucepan),
      this.person.wait(5),
      this.person.removeFrom(this.egg, this.saucepan)
    ];

    return sequence(boiledEggTasks);
  }
};