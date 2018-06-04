const Thing = require('./Thing');

module.exports = class Bowl extends Thing {

  constructor() {
    super();
    this.name = "Bowl";
  }
};