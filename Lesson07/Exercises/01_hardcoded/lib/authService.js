// ...
const db = require('./db');
const users = db.sublevel('users');

const tokenSecret = 'SHHH!';

exports.login = (username, password, callback) => {
    users.get(username, function(err, user) {
       // ...
    });

    exports.checkToken = (token, callback) => {
       // ...
       users.get(userData.username, function (err, user) {
          // ...
       });
    };
};