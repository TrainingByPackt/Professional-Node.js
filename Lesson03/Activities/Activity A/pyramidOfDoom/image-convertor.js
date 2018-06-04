'use strict';

const Jimp = require('jimp');

const imageConvertor = new ImageConvertor();
imageConvertor.start();

function ImageConvertor() {

    const levelup = require('levelup');

    const db = levelup('./imagedb');

    return {
        start: () => {
            const jobQueue = ['wat2.png', 'wat1.png'];

            let imageName = jobQueue.pop();
            console.log('Processing image: ', imageName);
            Jimp.read('./img/' + imageName, function(err, image) {
                console.log('Read image: ' + './img/' + imageName);
                if (!err) {
                    db.put('name-' + imageName.split('.')[0], imageName, function (err) {
                        if (err) {
                            console.log ('Ooooops!', err); // an I/O error writing to database
                        } else {
                            // resize image wat1.png
                            image.resize(256, 256)            // resize
                                .quality(60)                 // set JPEG quality
                                .greyscale()                 // set greyscale
                                .write("./img/output/" + imageName.split('.')[0] + ".jpg") // write out toe the output folder

                            db.put('success-' + imageName.split('.')[0], 'true', function (err) {
                                if (err) {
                                    console.log ('Ooooops!', err); // an I/O error writing to success message to the database
                                } else {
                                    console.log ('Recording successful message for ' + imageName + ' in DB!')

                                    imageName = jobQueue.pop();
                                    console.log('Processing image: ', imageName);
                                    Jimp.read('./img/' + imageName, function(err, image) {
                                            console.log('Read image: ' + './img/' + imageName);
                                            if (!err) {
                                                db.put('name-' + imageName.split('.')[0], imageName, function (err) {
                                                    if (err) console.log ('Ooooops!', err); // an I/O error writing to database

                                                    image.resize(384, 256)            // resize
                                                        .quality(60)                 // set JPEG quality
                                                        .greyscale()                 // set greyscale
                                                        .write("./img/output/" + imageName.split('.')[0] + ".jpg") // write out toe the output folder

                                                    db.put('success-' + imageName.split('.')[0], 'true', function (err) {
                                                        if (err) {
                                                            console.log ('Ooooops!', err); // an I/O error writing to success message to the database
                                                        } else {
                                                            console.log ('Recording successful message for ' + imageName + ' in DB!')
                                                        }
                                                    });
                                                });
                                            }
                                        }
                                    );
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}