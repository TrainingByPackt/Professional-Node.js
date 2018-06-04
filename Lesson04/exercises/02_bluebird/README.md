# Promisify HTTP Client

The Bluebird library is a Promise library that provides a number of different benefits over other third-party libraries.

## Why Bluebird?

Taken from it's own API documentation Bluebird states...

Bluebird is built with the following design principles in mind:

* *Pragmatic and not theoretical* - Bluebird will always pick the pragmatic route vs the theoretically elegant one when there is a conflict. The library's API was created based on real-life use cases and after a lot of consideration.
* *Fully featured without bloat* - Bluebird provides all the tools and utilities needed to realize a highly expressive and fluent DSL for asynchronous JavaScript without suffering from bloat by avoiding incorporating features that are solely motivated by theoretical arguments, have extremely narrow applicability or have limited synergy and composability with existing features.
* *Easy to debug* - A major consequence of choosing pragmatism over theoretical elegance, a property that among promise libraries taken to this extent is unique to bluebird.
** Bluebird ships with the best cross-platform long stack traces out there and a warning system. This helps you recognize common and devastating promise usage mistakes early before they lead to hard to debug code later.
** Unhandled errors are not silently swallowed by default but reported along with helpful stack traces where applicable. All of this is of course configurable.
* *Zero overhead abstraction* - In server-side applications the performance of a promise implementation matters. Bluebird's server side performance is measured with highly relevant realistic end-to-end macro benchmarks and consistently comes out on top. We understand that if bluebird is as close to a zero cost abstraction as possible, developers won't be tempted to short-circuit and absorb complexity themselves.
* *Runs everywhere* - Bluebird runs on pretty much every platform. This makes bluebird ideal for projects who care about providing consistent cross-platform and cross-version experience. It runs on old IE, it has even been known to run on Netscape 7.
* *Spec compatible* - bluebird can work as a drop-in replacement for native promises for an instant performance boost. It passes the Promises/A+ test suite and is fully spec compliant.

In this exercise we will use one of Bluebird's commonly used features which utilises *promisification*.

## What is Promisification?

*Promisification* is the process of wrapping a call in a Promise so that is can be asynchronously executed and is no longer synchronous.

## Exercise

In this exercise you will use the `Promise.promisifyAll` function to wrap all calls in the `https` Node.js standard library as asynchronous calls.

You will then demonstrate a call to a website like `https://www.google.com` can then be performed in an asynchronous nature.

Sample output might be:

```
➜  02_bluebird git:(master) ✗ node bluebird-promisify.js
Before GET request
After GET request
statusCode: 302
headers: { 'cache-control': 'private',
  'content-type': 'text/html; charset=UTF-8',
  'referrer-policy': 'no-referrer',
  location: 'https://www.google.co.uk/?gfe_rd=cr&dcr=0&ei=IlrJWYXkF_TGXvLYvsAK',
  'content-length': '270',
  date: 'Mon, 25 Sep 2017 19:33:54 GMT',
  'alt-svc': 'quic=":443"; ma=2592000; v="39,38,37,35"',
  connection: 'close' }
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="https://www.google.co.uk/?gfe_rd=cr&amp;dcr=0&amp;ei=IlrJWYXkF_TGXvLYvsAK">here</A>.
</BODY></HTML>
```

As you can see in the example above, both the Before GET request and After GET request are printed before the asynchronous call can return from Google.