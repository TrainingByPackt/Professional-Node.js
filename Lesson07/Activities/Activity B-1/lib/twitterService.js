"use strict";

const TwitterStub = require('./twitterStub');

class TwitterService {

    constructor(key, secret, accessKey, accessToken) {
        this.client = new TwitterStub({
            consumer_key: key,
            consumer_secret: secret,
            access_token_key: accessKey,
            access_token_secret: accessToken
        });
    }

    tweet(status, callback) {
        this.client.post('statuses/update', {status: status}, function(err, tweet, response) {
            callback(err, tweet, response);
        });
    }

    retweet(tweetId, callback) {
        this.client.post('statuses/retweet/' + tweetId, function(err, tweet, response) {
            callback(err, tweetId, tweet, response);
        });
    }

    search(query, callback) {
        this.client.get('search/tweets', {q: query}, function(err, tweets, response) {
            callback(err, query, tweets, response);
        });
    }

    list(handle, callback) {
        this.client.get('statuses/user_timeline', {handle: handle}, function(err, tweets, response) {
            callback(err, handle, tweets, response);
        });
    }
}

module.exports = TwitterService;