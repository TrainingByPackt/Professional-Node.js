const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const mkdirp = utilities.promisify(require('mkdirp'));
const fs = require('fs');
const writeFile = utilities.promisify(fs.writeFile);
const path = require('path');

const TaskQueue = require('./taskQueue');
const downloadQueue = new TaskQueue(2);



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
  }).then(Promise.resolve());

  return spiderLinks(url, body, nesting);
}

function spiderLinks(currentUrl, body, nesting) {
  if(nesting === 0) {
    return Promise.resolve();
  }

  const links = utilities.getPageLinks(currentUrl, body);
  //we need the following because the Promise we create next
  //will never settle if there are no tasks to process
  if(links.length === 0) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    let completed = 0;
    let errored = false;
    links.forEach(link => {
      let task = () => {
        return spider(link, nesting - 1)
        .then(() => {
          if(++completed === links.length) {
            resolve();
          }
        })
        .catch(() => {
          if (!errored) {
            errored = true;
            reject();
          }
        });
      };
      downloadQueue.pushTask(task);
    });
  });
}


spider(process.argv[2], 1)
  .then(() => console.log('Download complete'))
  .catch(err => console.log(err));

