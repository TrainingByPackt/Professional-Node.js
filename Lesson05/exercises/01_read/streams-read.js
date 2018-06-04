'use strict';

const crypto = require('crypto');
const fs = require('fs');

const readStream = fs.createReadStream('./images/input/dilbert.jpg');
const hash = crypto.createHash('sha1');

const writeStream = fs.createWriteStream('./images/output/dilbert.jpg');

readStream
  .on('readable', function() {
    let chunk;
    while (null !== (chunk = readStream.read())) {
      hash.update(chunk);
      console.log(chunk);
      writeStream.write(chunk);
    }
  })
  .on('end', function() {
    console.log("Image input hash digest: " + hash.digest('hex'));
  });

