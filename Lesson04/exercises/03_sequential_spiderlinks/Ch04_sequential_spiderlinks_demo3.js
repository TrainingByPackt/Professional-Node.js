const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const mkdirp = utilities.promisify(require('mkdirp'));
const fs = require('fs');
const writeFile = utilities.promisify(fs.writeFile);
const path = require('path');


function spider(url, nesting) {
  const filename = utilities.urlToFilename(url);
  return download(url, filename, nesting);
}

function download(url, filename, nesting) {
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
  }).then(spiderLinks(url, body, nesting));
}

function spiderLinks(currentUrl, body, nesting) {
  console.log('inside spider links');
  let promise = Promise.resolve();
  if (nesting === 0) {
    return promise;
  }
  const links = utilities.getPageLinks(currentUrl, body);
  links.forEach(link => {
    promise = promise.then(() => spider(link, nesting - 1));
  });

  return promise;
}

spider(process.argv[2], 1)
  .then(() => console.log('Download complete'))
  .catch(err => console.log(err));

