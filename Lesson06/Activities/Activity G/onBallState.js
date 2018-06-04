module.exports = class onBallState {

  constructor (player) {
    this.player = player;
    this.actions = [ 'PASS', 'SHOOT', 'DRIBBLE' ];
  }

  activate() {
    this.player.enableActions(this.actions);
  }
};