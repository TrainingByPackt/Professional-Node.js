"use strict";

const webpack = require('webpack');
const path = require('path');

module.exports = function(env) {
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'

    let newEnv = 'local';
    if (env.NODE_ENV !== undefined) {
        newEnv = env.NODE_ENV;
    }
    console.log('newEnv', newEnv);
    return {
        target: 'web',
        node: {
          fs: 'empty'
        },
        entry:  path.join(__dirname, "./", "configLoader.js"),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            libraryTarget: 'var',
            library: 'EntryPoint'
        },
        module: {
            rules: [
                {
                    test: /configLoader\.js$/,
                    loader: 'string-replace-loader',
                    options: {
                        search: 'APP_ENV',
                        replace: `${newEnv}`,
                        flags: 'i'
                    }
                }
            ]
        }
    }
};