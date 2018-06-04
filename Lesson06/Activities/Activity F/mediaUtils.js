const utilities = require('./utilities');
const fs = require('fs');
const readFile = utilities.promisify(fs.readFile);
const readTags = require('read-id3-tags').readID3Tags;

module.exports.downloadFile = function(file) {
    // Implement the strategy function for downloading the ile and reading the meta information
};

module.exports.loadFile = (fileProperties) => {
    console.log("called loadFile: ", fileProperties);
    let media = {};
    media.path = fileProperties.path;

    return readFile(fileProperties.path, 'utf-8')
    .then((file) => {
        media.data = file;
        return media;
    })
    .then(media => readTags(media.path))
    .then((data) => {
        console.log('data', data);
        media.meta = data;
        return media;
    })
    .catch(err => console.log(err));
};

/*
tags: {
  title: "Tomorrow",
  artist: "Kevin Penkin",
  image: {
    mime: "jpeg",
    type: {
      id: 3,
      name: "front cover"
    },
    description: String,
    imageBuffer: Buffer
  },
  raw: {
    TIT2: "Tomorrow",
    TPE1: "Kevin Penkin",
    APIC: Object (See above)
  }
}
*/