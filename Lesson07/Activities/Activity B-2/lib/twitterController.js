module.exports = (twitterAuth, twitterService) => {

    twitterAuth.tweet = (req, res, next) => {
        twitterService.tweet(req.param('status'), (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully posted tweet!");
                } else {
                    console.log("There was an error POSTing the tweet: ", tweet);
                    console.log("Error:", err);
                }
            }
        );
    };

    twitterAuth.retweet = (req, res, next) => {
        twitterService.retweet(req.param('tweetId'), (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully retweeted tweet", tweet);
                } else {
                    console.log("There was an error POSTing the tweet: ", tweet);
                }
            }
        );
    };

    twitterAuth.search = (req, res, next) => {
        twitterService.search(req.param('query'), (err, query, tweets, response) => {
            if (!err) {
                console.log("Searched for tweets using query [" + query + "]");
                console.log("Response: ", response);
                console.log("Tweets found: ", tweets);
            } else {
                console.log("There was an error search for tweets using query: " + query);
            }
        });
    };

    twitterAuth.list = (req, res, next) => {
        twitterService.list(req.param('handle'), (err, handle, tweets, response) => {
                if (!err) {
                    console.log("Printing tweets for handle", handle);
                    console.log("Tweets: ", tweets);
                } else {
                    console.log("There was an error listing tweets for handle[" + handle + "]");
                    console.log("Error:", err);
                }
            }
        );
    };

    twitterAuth.oauthConnect = (req, res, next) => {
        console.log('oauth connected');
    };

    twitterAuth.oauthCallback = (req, res, next) => {
        console.log()
    };

    twitterAuth.logout = (req, res, next) => {

    };

    return twitterAuth;
};
