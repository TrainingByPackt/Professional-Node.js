'use strict';

const fs = require('fs');

const readStream = fs.createReadStream('./books/mobydick.txt', {
  encoding: 'utf8',
  fd: null,
  bufferSize: 1,
});

let words = [];

let wordRegex = new RegExp(/[^\s]*\s/g);

console.log('Reading Moby Dick...');
readStream
  .on('data', chunk => {
    let word;
    while (word = wordRegex.exec(chunk.toString())) {
      words.push(word[0]);
    }

    printWordsWithDelay(words, 0, 350);
  });

function printWordsWithDelay(words, i, delay) {
  setTimeout(function() {

    process.stdout.write(words[i]);
    if (i >= 0) {
      i = i + 1;
      printWordsWithDelay(words, i, delay);
    }
  }, delay);
}