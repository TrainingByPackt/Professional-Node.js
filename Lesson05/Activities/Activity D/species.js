const stream = require('stream');
const Readable = require('stream').Readable;
const Writable = require('stream').Writable;
const util = require('util');

const lizard = {
  "vertebrate": true,
  "birthType": "Eggs",
  "skinType": "Scales",
  "regulateBodyHeat": false
};

const frog = {
  "vertebrate": true,
  "birthType": "Eggs",
  "skinType": "Moist",
  "regulateBodyHeat": false
};

const whale = {
  "vertebrate": true,
  "birthType": "Live Young",
  "skinType": "Hairy",
  "regulateBodyHeat": true
};

class AnimalReadable extends stream.Readable {
    constructor(data) {
      const options = {
        objectMode: true
      };
      super(options);
      this.data = data;
    }

    _read() {
      this.push(this.data, 'utf8');
    }
}
//
// const AnimalReadable = function(data) {
//   Readable.call(this, { objectMode: true});
//   this.data = data;
//   this.curIndex = 0;
// };
// util.inherits(AnimalReadable, Readable);

const animals = [new AnimalReadable(JSON.parse(lizard)), new AnimalReadable(JSON.parse(frog)), new AnimalReadable(JSON.parse(whale))];

console.log("here1");

const ReptileWritable = function() {
  Writable.call(this, {objectMode: true});
};
util.inherits(ReptileWritable, Writable);

const AmphibianWritable = function() {
  Writable.call(this, {objectMode: true});
};
util.inherits(AmphibianWritable, Writable);

const MammalWritable = function() {
  Writable.call(this, {objectMode: true});
};
util.inherits(MammalWritable, Writable);

const destinations = {
  'reptile': ReptileWritable,
  'amphibian': AmphibianWritable,
  'mammal': MammalWritable
};
console.log("here2");

const multiplex = function(sources, destinations) {
  let totalChannels = sources.length;
  for (let i = 0; i < totalChannels; i++) {
    console.log("here3 [" + i + "]");
    console.log("source:", sources[i]);
    sources[i].on("readable", function() {
      console.log("inside Readable " + i);
      let chunk;
      while ((chunk = this.read()) !== null) {
        console.log("here4");
        const outBuff = new Buffer(chunk.length); //[2]
        outBuff.writeUInt8(i, 0);
        outBuff.writeUInt32BE(chunk.length, 1);
        chunk.copy(outBuff, 5);

        console.log("here5");
        const object = JSON.parse(outBuff);
        if (object.skinType === "Eggs") {
          console.log('Sending packet to channel Reptile');
          destinations['reptile'].write(outBuff);
        } else if (object.skinType === "Hairy") {
          console.log('Sending packet to channel Mammal');
          destinations['mammal'].write(outBuff);
        } else if (object.skinType === "Moist") {
          console.log('Sending packet to channel Amphibian');
          destinations['amphibian'].write(outBuff);
        }
      }
    })
    .on('error', (message) => {
      console.log(message);
    })
    .on('end', () => {
      if (--totalChannels === 0) {
        demultiplex(this);
      }
    });
  }
};

const demultiplex = function(source) {
  let currentChannel = null;
  let currentLength = null;
  source.on('readable', () => { //[1]
    let chunk;
    if (currentChannel === null) { //[2]
      chunk = source.read(1);
      currentChannel = chunk && chunk.readUInt8(0);
    }
    if (currentLength === null) { //[3]
      chunk = source.read(4);
      currentLength = chunk && chunk.readUInt32BE(0);
      if (currentLength === null) {
        return;
      }
    }
    chunk = source.read(currentLength); //[4]
    if (chunk === null) {
      return;
    }
    console.log('Received packet from: ' + currentChannel);
    currentChannel = null;
    currentLength = null;
  })
  .on('end', () => {
    console.log('Source channel closed');
  });
};

// pass in the streams
multiplex(animals, destinations);