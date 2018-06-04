const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const creds = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const TwitterService = require('./lib/twitterService');
const twitterService = new TwitterService(creds.consumer_key, creds.consumer_secret, creds.access_token_key, creds.access_token_secret);

const TwitterController = require('./lib/twitterController');
const twitterController = new TwitterController(twitterService);

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

app.use(errorHandler());
http.createServer(app).listen(3001, () => {
    console.log('Express server started');
});
