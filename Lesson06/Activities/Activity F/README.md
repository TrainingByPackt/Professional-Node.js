# Strategy - Online/Offline MP3 Client

In this exercise we are going to utilise the capabilities of the strategy pattern by toggling the status of a Media Player client from online to offline.

Whilst offline the media client will read the file from a specified configured location. It will read the mp3 file from disk and then output the ID3 tag information for that mp3 file.

## Exercise

Your task is to create the online strategy for reading a file from an online location. You will have to download the file using an HTTP client and then similarly pass it through the ID3 Tags reader library we have provided. 

Audio files can be read in .mp3 format and must contain ID3 Tag information to work for this exercise.

## mediaClient.js

For the start of the exercise, we've given you the mediaClient.js (the entry point) 

```$javascript
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
```

Run the exercise using... 

```$bash
node mediaClient.js
```

After you have implemented the rest of the code for playing the media offline.

Once running the above command in the terminal you should see the following output:

```$bash
➜  05_strategy git:(master) ✗ node mediaClient.js
offline
called loadFile:  { downloadUrl: 'http://raw.githubusercontent.com/guo-yu/player/master/examples/mp3/demo.mp3',
  path: 'mp3/demo.mp3' }
data { title: 'Funeral For A Friend - Love Lies Bleeding',
  artist: [ 'Elton John' ],
  albumartist: [],
  album: 'Goodbye Yellow Brick Road',
  year: '1973',
  track: { no: 1, of: 17 },
  genre: [ 'Pop' ],
  disk: { no: 1, of: 1 },
  picture: [],
  duration: 669.64945,
  featurings: [] }
Media
===========
Title: Funeral For A Friend - Love Lies Bleeding
Artist: Elton John
Album: Goodbye Yellow Brick Road
Year: 1973
Track No#: 1
Genre: Pop
Duration: 669.64945s
```

Note: For bonus points, implement the online strategy. It should produce the same output but pull an `.mp3` file from an online location.   

