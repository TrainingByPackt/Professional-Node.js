class TwitterController {

    constructor(twitterService) {
        this.twitterService = twitterService;
    }

    tweet(req, res, next) {
        this.twitterService.tweet(req.param('status'), (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully posted tweet!");
                } else {
                    console.log("There was an error POSTing the tweet: ", tweet);
                    console.log("Error:", err);
                }
            }
        );
    };

    retweet(req, res, next) {
        this.twitterService.retweet(req.param('tweetId'), (err, tweet, response) => {
                if (!err) {
                    console.log("Successfully retweeted tweet", tweet);
                } else {
                    console.log("There was an error POSTing the tweet: ", tweet);
                }
            }
        );
    };

    search(req, res, next) {
        this.twitterService.search(req.param('query'), (err, query, tweets, response) => {
            if (!err) {
                console.log("Searched for tweets using query [" + query + "]");
                console.log("Tweets found: ", tweets);
            } else {
                console.log("There was an error search for tweets using query: " + query);
            }
        });
    };

    list(req, res, next) {
        this.twitterService.list(req.param('handle'), (err, handle, tweets, response) => {
                if (!err) {
                    console.log("Printing tweets for handle", handle);
                    console.log("Tweets: ", tweets);
                } else {
                    console.log("There was an error listing tweets for handle[ " + handle + "]");
                }
            }
        );
    };
}

module.exports = TwitterController;
