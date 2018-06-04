const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const mkdirp = utilities.promisify(require('mkdirp'));
const fs = require('fs');
const writeFile = utilities.promisify(fs.writeFile);
const path = require('path');

function spider(url) {
  const filename = utilities.urlToFilename(url);
  return download(url, filename);
}

function download(url, filename) {
  console.log(`Downloading ${url}`);
  let body;
  return request(url)
    .then(response => {
      body = response.body;
      return mkdirp(path.dirname(filename));
    })
    .then(() => writeFile(filename, body))
    .then(() => {
      console.log(`Downloaded and saved: ${url}`);
      return body;
    });
}

spider(process.argv[2])
  .then(() => console.log('Download complete'))
  .catch(err => console.log(err));

