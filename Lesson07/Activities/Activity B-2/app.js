const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');
const TwitterStub = require('./lib/twitterStub');

// const oauth = require('oauth');

const creds = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const TwitterService = require('./lib/twitterService');
const twitterService = TwitterService(new TwitterStub(creds.consumer_key, creds.consumer_secret, creds.access_token_key, creds.access_token_secret));

const twitterAuth = require('twitter-oauth')({
    consumerKey: creds.consumer_key, /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    consumerSecret: creds.consumer_secret,
    domain: 'http://localhost:3001',
    loginCallback: "http://localhost:3001/sessions/callback",  /* internal */
    completeCallback:  "http://localhost:3001/search/developerangst"  /* When oauth has finished - where should we take the user too */
});

const TwitterController = require('./lib/twitterController');
const twitterController = TwitterController(twitterAuth, twitterService);

const app = module.exports = express();
app.use(bodyParser.json());

app.route('/tweet').post(function(req, res, next) {
    twitterController.tweet(req, res, next);
});

app.route('/retweet').post(function(req, res, next) {
    twitterController.retweet(req, res, next);
});

app.route('/search').get(function(req, res, next) {
    twitterController.search(req, res, next);
});

app.route('/list').get(function(req, res, next) {
    twitterController.list(req, res, next);
});

app.route('/sessions/connect').get(twitterController.oauthConnect);
app.route('/sessions/callback').get(twitterController.oauthCallback);
app.route('/sessions/logout').get(twitterController.logout);

// app.route('/auth').get(function(req, res, next) {
//     var consumer = new oauth.OAuth(
//         "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
//         creds.consumer_key, creds.consumer_secret, "1.0A", "http://127.0.0.1:8080/sessions/callback", "HMAC-SHA1");
//
//     twitterController.auth(consumer, req, res, function(error, response, body) {
//         if (error) {
//             console.log("Error:", error);
//         } else {
//             console.log('body', body);
//             console.log('response', response);
//             response.setHeader('Content-Type', 'application/json');
//             response.send(body, null, 3);
//             // response.send(JSON.stringify(
//             //     { token: response }, null, 3));
//         }
//     });
// });

app.use(errorHandler());
http.createServer(app).listen(3001, () => {
    console.log('Express server started');
});
