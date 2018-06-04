"use strict";

class TwitterStub {

    constructor(consumerKey, consumerSecret, accessTokenKey, accessTokenSecret) {
        this.consumerKey = consumerKey;
        this.consumerSecret = consumerSecret;
        this.accessTokenKey = accessTokenKey;
        this.accessTokenSecret = accessTokenSecret;
    }

    post(url, parameters, callback) {
        const err = null;
        const tweets = [
            {
                'tweetId': 12345,
                'message': "This is a tweet"
            },
            {
                'tweetId': 12345,
                'message': "This is another tweet"
            }
        ];
        const response = {
            statusCode: 200,
            body: tweets
        };

        callback(err, tweets, response);
    };

    get(url, parameters, callback) {
        const err = null;
        const tweets = [
            {
                'tweetId': 12345,
                'message': "This is a tweet"
            },
            {
                'tweetId': 12345,
                'message': "This is another tweet"
            }
        ];
        const response = {
            statusCode: 200,
            body: tweets
        };

        callback(err, tweets, response);
    };
}

module.exports = TwitterStub;