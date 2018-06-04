"use strict";

const oauth = require('oauth');
const util = require('util');

const Twitter = require('twitter');
const request = require('request');

module.exports = (client) => {

    const twitterService = {};

    twitterService.tweet = (status, callback) => {
        client.post('statuses/update', {status: status}, function(err, tweet, response) {
            generateOAuthRequestToken(consumer, callback);
        });
    };

    twitterService.retweet = (tweetId, callback) => {
        client.post('statuses/retweet/' + tweetId, {}, function(err, tweet, response) {
            callback(err, tweetId, tweet, response);
        });
    };

    twitterService.search = (query, callback) => {
        client.get('search/tweets', {q: query}, function(err, tweets, response) {
            callback(err, query, tweets, response);
        });
    };

    twitterService.list = (handle, callback) => {
        client.get('statuses/user_timeline', {handle: handle}, function(err, tweets, response) {
            callback(err, handle, tweets, response);
        });
    };

    // twitterService.auth = (consumer, req, res, callback) => {
    //     consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results) {
    //         if (error) {
    //             res.send("Error getting OAuth request token : " + util.inspect(error), 500);
    //         } else {
    //
    //             req.session.oauthRequestToken = oauthToken;
    //             req.session.oauthRequestTokenSecret = oauthTokenSecret;
    //             // res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.oauthRequestToken);
    //             // make an http call to this endpoint and retrieeve the
    //
    //             request("https://twitter.com/oauth/authorize?oauth_token=" + req.session.oauthRequestToken, function (error, response, body) {
    //                 console.log('error:', error); // Print the error if one occurred
    //                 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //                 console.log('body:', body); // Print the HTML for the Google homepage.
    //
    //                 callback(error, response, body);
    //             });
    //         }
    //     });
    // };

    return twitterService;
};