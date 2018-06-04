module.exports = class nearBallState {

  constructor (player) {
    this.player = player;
    this.actions = [ 'SOFT_TACKLE', 'SLIDING', 'DRIBBLE' ];
  }

  activate() {
    this.player.enableActions(this.actions);
  }
};