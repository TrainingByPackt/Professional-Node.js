const stampit = require('stampit');

const piece = stampit()
  .props({
    name: 'Chess Piece',
    spaces: "*",
    directions: [],
    char: 'P'
  });

const mover = stampit()
    .methods({
        moves() {
            let string = this.char + '[' + this.directions.join('|') + ']' + '[' + this.spaces + ']';
            console.log(string);
        },
        setDirections(dirs) {
            this.directions = [];
            dirs.forEach(dir => {
                if (!this.directions.includes(dir)) {
                    this.directions.push(dir);
                }
            });
        }
    });

const shortMover = stampit()
    .props({
       spaces: '1'
    });

const longMover = stampit()
    .props({
        spaces: '*'
    });

const King = stampit.compose(piece, mover, shortMover);
const king = King();
king.name = 'King';
king.char = "K";
king.setDirections(['V', 'H', 'D']);


const Queen = stampit.compose(piece, mover, longMover);
const queen = Queen();
queen.name = 'Queen';
queen.char = "Q";
queen.setDirections(['V', 'H', 'D']);

const Bishop = stampit.compose(piece, mover, longMover);
const bishop = Bishop();
bishop.name = 'Bishop';
bishop.char = "B";
bishop.setDirections(['D']);

const Rook = stampit.compose(piece, mover, longMover);
const rook = Rook();
rook.name = 'Rook';
rook.char = "R";
rook.setDirections(['V', 'H']);

king.moves();
queen.moves();
bishop.moves();
rook.moves();
