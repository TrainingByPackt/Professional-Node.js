const Thing = require('./Thing');

module.exports = class SlottedSpoon extends Thing {

  constructor() {
    super();
    this.name = "Slotted Spoon";
  }
};