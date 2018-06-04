const Player = require('./Player');

const player = new Player();

player.listValidActions();

player.changeState('onball');

player.listValidActions();

player.changeState('nearball');

player.listValidActions();