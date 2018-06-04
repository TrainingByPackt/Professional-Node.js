const stream = require('stream');

class CipherStream extends stream.Transform {
  constructor() {
    super();
    this.tailPiece = '';
  }

  _transform(chunk, encoding, callback) {
    let charRegex = new RegExp(/[\D\s]/g);

    let letter;
    let decipheredSentence = '';
    console.log("Encrypted message: " + chunk.toString());
    while (letter = charRegex.exec(chunk.toString())) {
      let decipheredletter = decipherLetter(letter);
      this.tailPiece += decipheredletter;
    }

    callback();
  }

  _flush(callback) {
    this.push(this.tailPiece);
    callback();
  }
}

function decipherLetter(letter) {
  let key = {
    'a': 'z', 'b': 'a', 'c': 'b', 'd': 'c', 'e': 'd', 'f': 'e', 'g': 'f', 'h': 'g', 'i': 'h', 'j': 'i', 'k': 'j', 'l': 'k', 'm': 'l', 'n': 'm', 'o': 'n', 'p': 'o', 'q': 'p', 'r': 'q', 's': 'r', 't': 's', 'u': 't', 'v': 'u', 'w': 'v', 'x': 'w', 'y': 'x', 'z': 'y', ' ': ' '
  };
  return key[letter];
}

module.exports = CipherStream;

