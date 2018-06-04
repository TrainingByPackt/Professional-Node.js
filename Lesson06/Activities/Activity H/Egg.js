const Thing = require('./Thing');

module.exports = class Egg extends Thing {

  constructor() {
    super();
    this.name = "Egg";
  }
};