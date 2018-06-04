const Thing = require('./Thing');

module.exports = class Water extends Thing {

  constructor() {
    super();
    this.name = "Water";
  }
};