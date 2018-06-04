const Promise = require('bluebird');
const EggRecipe = require('./EggRecipe');
const Saucepan = require('./Saucepan');
const Bowl = require('./Bowl');
const SlottedSpoon = require('./SlottedSpoon');
const KitchenPaper = require('./KitchenPaper');
const sequence = require('./sequence');

module.exports = class PoachedEggRecipe extends EggRecipe {

  constructor(person) {
    super(person);

    Promise.promisifyAll(person);
  }

  _cook() {
    const cookingTasks = [
      this.person.crackInto(this.egg, new Bowl()),
      this.person.tip(this.egg, this.saucepan),
      this.person.wait(2),
      this.person.turnOff(this.stove),
      this.person.wait(2),
      this.person.lift(this.egg, new SlottedSpoon()),
      this.person.drain(this.egg, new KitchenPaper())
    ];

    return sequence(cookingTasks);
  }
};

