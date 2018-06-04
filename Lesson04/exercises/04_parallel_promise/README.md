# Parallel Place Requests

You work for a Ground Transportation company who provide services for Taxi and private hire pickups, in a team responsible for implementing an API that serves any clients that wish to consume your library and search for any place in the world.

Your goal is to write a function that utilises the Google Places API. You pass the name of the place to Google's API and Google returns the Google Place Id for each place you are searching for.

Your mission, should you choose to accept it, is to:

* Create functions that make asynchronous HTTP calls to [Google's Place Autocomplete API](https://developers.google.com/places/web-service/autocomplete)
* Return and store the Google Place Id and description for the first matching place
* Show that the calls are sent in parallel and occur asynchronously by printing the order in which they occur

Clients are searching for the following places:

```
Big Ben
10 Downing Street
Tower of London
Trafalgar Square London
Heathrow Airport
Stonehenge
Tower Bridge
```

## Google Places Web API

You will need to sign-up for a Google API Key to access the Google Maps API.
You can do so using [Google's Developer Console](https://console.developers.google.com]) using the `Credentials` tab to create a key and the Dashboard tab to enable the `Google Places API Web Service` API.

Once you've signed up the Google API you can try out the following request to search for each place:

```
https://maps.googleapis.com/maps/api/place/autocomplete/json?key=<insert_your_google_api_key>&input=<place_to_search>&language=en-gb&location=0,0&radius=200000&components=country:gb
```

`<place_to_search>` can be replaced with `Big%20Ben` if you are searching for `Big Ben`
`<insert_your_google_api_key>` should be replaced with your own google api key e.g. `AIzaSyCMJ6_IcN1PkIYqSidzUNwxeHbk-sJrs7E` (please sign up for your own - this is shared amongst students as an example and may not always work)

In order to complete the exercise you should show:

* The full description of the place e.g. _Big Ben, London, United Kingdom_
* The place ID e.g. _AIzaSyCMJ6_IcN1PkIYqSidzUNwxeHbk-sJrs7E_

If you've completed the task you should see something similar to the following output:

```
➜  04_parallel_promise git:(master) ✗ node parallel-place-requests.js
---------------------
Google Place Results
---------------------
Description [Tower of London, London, United Kingdom] - PlaceID [ChIJ3TgfM0kDdkgRZ2TV4d1Jv6g]
Description [Heathrow Airport, Longford, United Kingdom] - PlaceID [ChIJ6W3FzTRydkgRZ0H2Q1VT548]
Description [10 Downing Street, Downing Street, London, United Kingdom] - PlaceID [ChIJRxzRQcUEdkgRGVaKyzmkgvg]
Description [Trafalgar Square, London, United Kingdom] - PlaceID [ChIJH-tBOc4EdkgRJ8aJ8P1CUxo]
Description [Big Ben, London, United Kingdom] - PlaceID [ChIJ2dGMjMMEdkgRqVqkuXQkj7c]
Description [Stonehenge, Amesbury, United Kingdom] - PlaceID [ChIJEfYKhTvmc0gR3dLTvOJwkZc]
```

Best of luck soldier!

*Hint*: If you make HTTP requests using an asynchronous library from within a promise and you call Promise.all so that all promises resolve in parallel, what considerations are there for printing out the results and what can you do to overcome them?
