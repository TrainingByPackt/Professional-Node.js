module.exports = class offBallState {

  constructor (player) {
    this.player = player;
    this.actions = [ 'MOVE', 'CLOSE_DOWN' ];
  }

  activate() {
    this.player.enableActions(this.actions);
  }
};