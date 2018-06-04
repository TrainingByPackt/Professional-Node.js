const JpegImage = require('./JpegImage');
const GifImage = require('./GifImage');
const PngImage = require('./PngImage');

function createImage(name) {
    if (name.match(/\.jpeg$/)) {
        return new JpegImage(name);
    } else if (name.match(/\.gif$/)) {
        return new GifImage(name);
    } else if (name.match(/\.png$/)) {
        return new PngImage(name);
    } else {
        throw new Exception('Unsupported format');
    }
}

const jpeg = createImage('zoo.jpeg');
jpeg.test();

const gif = createImage('hospital.gif');
gif.test();

const png = createImage('library.png');
png.test();








