const Thing = require('./Thing');

module.exports = class CartonOfEggs extends Thing {

  constructor() {
    super();
    this.name = "Carton Of Eggs";
  }
};