# StampIt Chess

Making use of the `stampit` module we would like you to implement the moves of various chess pieces using the following specification.

For each chess piece the rules are as follows
* Rook - can move horizontally and vertically
* Bishop - can move diagonally and it can move more than one space
* Queen - can move diagonally, horizontally and vertically and it can move more than one space
* King - can move diagonally and vertically but only one space in any direction

We will treat pawns and knights as special cases for now and ignore them for the purposes of this exercise.

Using the stamp specification implement a program that returns the available move configuration for each piece.

## Example Output

For the following examples you should see the following responses:

### Rook
```$javascript
var rook = new Rook();
rook.moves();
```

Response:

```
R[H|V][*]
```

This means that the symbol for a Rook is R and that it can move Horizontally (H) and Vertically (V) any number of spaces (*)

### Bishop

```$javascript
var bishop = new Bishop();
bishop.moves();
```

Response:

```
B[D][*]
```

This means that the symbol for a Bishop is B and that it can move Diagonally (D) any number of spaces (*)

### Queen

```$javascript
var queen = new Queen();
queen.moves();
```

Response:

```
Q[H|V|D][*]
```

This means that the symbol for a Queen is Q and that it can move Horizontally (H), Vertically (V) and Diagonally (D) any number of spaces (*)

### King

```$javascript
var king = new King();
king.moves();
```

Response:

```
K[H|V|D][1]
```

This means that the symbol for a King is K and that it can move Horizontally (H), Vertically (V) and Diagonally (D) and that it can only move one space (1)