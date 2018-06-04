'use strict';

const Jimp = require('jimp');

const imageConvertor = new ImageConvertor();
imageConvertor.start();

function ImageConvertor() {

    const levelup = require('levelup');
    const db = levelup('./imagedb');

    function start() {
        const jobQueue = ['wat2.png', 'wat1.png'];

        let imageName = jobQueue.pop();
        convertImage(imageName, function(image) {
            insertEntryIntoDB({key: 'name-' + imageName.split('.')[0], value: imageName.split('.')[0]}, function () {
                resizeImage({'height': 256, 'width': 256}, image, imageName, function () {
                    imageName = jobQueue.pop();
                    convertImage(imageName, function () {
                    });
                });
            })
        });
    }

    function convertImage(imageName, callback) {
        console.log('Processing image: ', imageName);

        Jimp.read('./img/' + imageName, function(err, image) {
            console.log('Read image: ' + './img/' + imageName);
            if (!err) {
                callback(image);
            }
        });
    }

    function resizeImage(settings, image, name, callback) {
        const nameWithoutExtension = name.split('.')[0];
        image.resize(settings.height, settings.width)            // resize
            .quality(60)                 // set JPEG quality
            .greyscale()                 // set greyscale
            .write("./img/output/" + nameWithoutExtension + ".jpg"); // write out toe the output folder

        const entry = { key: 'success-' + nameWithoutExtension, value: 'true' };
        insertEntryIntoDB(entry, function (err) {
            if (err) {
                console.log ('Ooooops!', err); // an I/O error writing to success message to the database
            } else {
                console.log ('Recording successful message for ' + name + ' in DB!');

                callback();
            }
        });
    }

    function insertEntryIntoDB(entry, callback) {
        db.put(entry.key, entry.value, function (err) {
            if (err)  {
                console.log ('Ooooops!', err); // an I/O error writing to database
            } else {
                callback();
            }
        });
    }

    return {
        start: start
    };
}