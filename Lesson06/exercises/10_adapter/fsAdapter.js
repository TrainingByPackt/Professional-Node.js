const path = require('path');

module.exports = function createFsAdapter(db) {
    const fs = {};

    fs.readFile = (filename, options, callback) => {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        } else if (typeof options === 'string') {
            options = { encoding: options };
        }

        db.get (path.resolve(filename), {
            valueEncoding: options.encoding
        },
        (err, value) => {
            if (err) {
                if (err.type === 'NotFoundError') {
                    err = new Error(`ENOENT, open "${filename}"`);
                    err.code = 'ENOENT';
                    err.errno = 34;
                    err.path = filename;
                }
                return callback && callback(err);
            }
            callback && callback(null, value);
        });
    };

    fs.writeFile = (filename, contents, options, callback) => {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        } else if (typeof options === 'string') {
            options = { encoding: options };
        }

        db.put(path.resolve(filenamee), contents, {
            valueEncoding: options.encoding
        }, callback);
    };
    return fs;
};

const fs = require('fs');

fs.writeFile('file.txt', 'Hello!', () => {
    fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => {
        console.log(res);
    })
});

// try to read a missing file
fs.readFile('missing.txt', { encoding: 'utf8' }, (err, res) => {
    console.log(err);
});