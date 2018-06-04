const Thing = require('./Thing');

module.exports = class Stove extends Thing {

  constructor() {
    super();
    this.name = "Stove";
  }
};