'use strict';

const Promise = require('bluebird');
const https = Promise.promisifyAll(require('https'));

class HttpClient {

  constructor(url) {
    this.url = url;
  }

  get() {
    https.getAsync(this.url, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.on('data', (d) => {
        process.stdout.write(d);
      });
    })
    .then(() => {
      console.log('Occurs ALWAYS after GET request');
    })
    .catch((error) => console.log('Error', error));
  }
}

const httpClient = new HttpClient('https://www.google.com');
console.log('Before GET request');
httpClient.get();
console.log('After GET request');

module.exports = HttpClient;