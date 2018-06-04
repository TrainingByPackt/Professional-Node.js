'use strict';

const https = require('https');
const EventEmitter = require('events');

const parallelPlaceRequests = ParallelPlaceRequests();
parallelPlaceRequests.search();

function ParallelPlaceRequests() {

  const apiKey = 'AIzaSyCMJ6_IcN1PkIYqSidzUNwxeHbk-sJrs7E';
  const inputs = ['Big Ben', '10 Downing Street', 'Tower of London', 'Trafalgar Square London', 'Heathrow Airport', 'Stonehenge', 'Tower Bridge'];

  function autocompleteUrl(apiKey, input) {
    let sanitisedInput = encodeURIComponent(input);
    return `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${sanitisedInput}&language=en-gb&location=0,0&radius=200000&components=country:gb`
  }

  return {
    search: () => {
      let results = [];

      let requests = [];
      let responseCount = 0;

      class AllRequestsReceived extends EventEmitter {}
      const allRequestsReceived = new AllRequestsReceived();

      inputs.forEach((input) => {
        requests.push(autocompleteUrl(apiKey, input));
      });

      const promises = requests.map(request =>
          https.get(request, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
              data += chunk;
            });

            resp.on('end', () => {
              responseCount++;
              if (responseCount === requests.length) {
                allRequestsReceived.emit('allreceived');
              }
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
            });
          })
      );

      Promise.all(promises)
             .catch((error) => console.log('Failed to get Google Place Results!', error));

      allRequestsReceived.on('allreceived', () => {
        console.log('---------------------');
        console.log('Google Place Results');
        console.log('---------------------');
        results.forEach((result) => {
          console.log('Description [' + result['description'] + '] - PlaceID [' + result['place_id'] + ']');
        });
      });
    }
  }
}