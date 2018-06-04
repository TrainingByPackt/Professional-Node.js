const fs = require('fs');
const backwards = require('fs-backwards-stream');

const writeStreamReverse = fs.createWriteStream('reverse.txt');

var options = {
  start: 1000,
      end: 0,
  block: 1
};

const backwardsStream = backwards('example.txt', options);

backwardsStream.on('data', function(buf) {
  console.log(buf.toString());
   writeStreamReverse.write(buf);
});
