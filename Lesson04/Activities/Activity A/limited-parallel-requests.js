'use strict';

const TaskQueue = require('taskQueue/taskQueue');

const https = require('https');
const EventEmitter = require('events');

const limitedParallelPlaceRequests = LimitedParallelPlaceRequests();
limitedParallelPlaceRequests.search();

function LimitedParallelPlaceRequests() {

  const apiKey = 'AIzaSyCMJ6_IcN1PkIYqSidzUNwxeHbk-sJrs7E';
  const inputs = ['Big Ben', '10 Downing Street', 'Tower of London', 'Trafalgar Square London', 'Heathrow Airport', 'Stonehenge', 'Tower Bridge'];

  const requestQueue = new TaskQueue(2);
  let requestsProcessed = 0;

  function autocompleteUrl(apiKey, input) {
    let sanitisedInput = encodeURIComponent(input);
    return `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${sanitisedInput}&language=en-gb&location=0,0&radius=200000&components=country:gb`
  }

  function retrievePlaceDetails(request, results, cb) {
    return new Promise((resolve, reject) => {
      https.get(request, (resp) => {
        console.log('GET call to', request);
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          requestsProcessed++;
          const responseObj = JSON.parse(data);

          if (responseObj.status !== 'ZERO_RESULTS') {
            results.push({
              'request': request,
              'description': responseObj.predictions[0].description,
              'place_id': responseObj.predictions[0].place_id
            });
          } else {
            console.log(`No results for ${request}`);
          }

          cb();
        });
      });
      resolve();
    }).catch((error) => {
      console.log("Error sending Google GET request", error);
    });
  }

  return {
    search: () => {
      let results = [];

      let requestUrls = [];

      class AllRequestsReceived extends EventEmitter {}
      const allRequestsReceived = new AllRequestsReceived();

      inputs.forEach((input) => {
        requestUrls.push(autocompleteUrl(apiKey, input));
      });

      allRequestsReceived.on('allreceived', () => {
        console.log('---------------------');
        console.log('Google Place Results');
        console.log('---------------------');
        results.forEach((result) => {
          console.log('Description [' + result['description'] + '] - PlaceID [' + result['place_id'] + ']');
        });
      });

      return new Promise((resolve, reject) => {
        let errored = false;
        let completed = 0;

        requestUrls.forEach(requestUrl => {
          let task = () => {
            return retrievePlaceDetails(requestUrl, results, () => {
                  if (requestsProcessed === requestUrls.length) {
                    allRequestsReceived.emit('allreceived');
                  }
                })
                .then(() => {
                  if (++completed === requestUrls.length) {
                    console.log(`${completed} requests processed!`);

                    resolve();
                  }
                }).catch(() => {
                    if (!errored) {
                      errored = true;
                      reject();
                    }
                });
          };
          requestQueue.pushTask(task);
        });
      }).catch((error) => {
        console.log("Error looping request urls", error);
      });
    }
  }
}