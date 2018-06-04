const MediaPlayer = require('./MediaPlayer');

let file = {
    downloadUrl: 'http://raw.githubusercontent.com/guo-yu/player/master/examples/mp3/demo.mp3', // change the location to an mp3 online with id3 tags
    path: 'mp3/demo.mp3'
};

// Implement the second strategy to read a file from an online source
// let online = true;
// const mediaPlayerOnline = new MediaPlayer(online);
//
// const downloadedOnlineMedia = mediaPlayerOnline.download(file);
//
// mediaPlayerOnline.displayMeta(downloadedOnlineMedia);

const offline = false;
const mediaPlayerOffline = new MediaPlayer(offline);

mediaPlayerOffline
    .download(file)
    .then(media => mediaPlayerOffline.displayMeta(media));



