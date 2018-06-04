"use strict";

(function(root, factory) {           //[1]
    if (typeof define === 'function' && define.amd) {
        define(['request'], factory);
    } else if (typeof module === 'object' &&
        typeof module.exports === 'object') {
        var request = require('request');
        module.exports = factory(request);
    } else {
        root.UmdModule = factory(root.Request);
    }
}(this, function(request) {

    return {
        sendMessage: function(message) {
            request('http://localhost:3001/say?message=' + message, { json: true }, (err, resp, body) => {
                if (err) { return console.log(err); }
                console.log(body);
            });
        }
    };
}));
