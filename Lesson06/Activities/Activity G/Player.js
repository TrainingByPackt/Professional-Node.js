const OnBallState = require('./OnBallState');
const OffBallState = require('./OffBallState');
const NearBallState = require('./NearBallState');

module.exports = class Player {

  constructor() {
    this.currentState = null;
    this.states = {
      onball: new OnBallState(this),
      offball: new OffBallState(this),
      nearball: new NearBallState(this)
    };
    this.validActions = [];
    this.changeState('offball');
  }

  changeState(state) {
    console.log('Activating state: ' + state);
    this.currentState = this.states[state];
    this.currentState.activate();
  }

  listValidActions() {
    console.log("Valid Actions are: ", this.validActions);
  }

  enableActions(actions) {
    this.validActions = actions;
  }
}