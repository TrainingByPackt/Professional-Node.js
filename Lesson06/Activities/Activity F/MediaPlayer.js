const strategies = require('./strategies');
const utilities = require('./utilities');

class MediaPlayer {

    constructor(online) {
        this.data = {};
        this.online = online;
    }

    download(file) {
        if (this.online) {
            return strategies.online.download(file);
        } else {
            console.log('offline');
            return strategies.offline.download(file);
        }
    }

    play(media) {
        console.log("Media is now playing...");
        // logic here to delegate to some third party streaming library for playing .mp3 files
    }

    stop(media) {
        console.log("Media is now stopped...");
        // logic here to delegate to some third-party streaming library to stop playing .mp3 files
    }

    displayMeta(media) {

        console.log("Media");
        console.log("===========");
        console.log("Title: " + media.meta.title);
        console.log("Artist: " + media.meta.artist);
        console.log("Album: " + media.meta.album);
        console.log("Year: " + media.meta.year);
        console.log("Track No#: " + media.meta.track.no);
        console.log("Genre: " + media.meta.genre);
        console.log("Duration: " + media.meta.duration + 's');


    }
}

module.exports = MediaPlayer;