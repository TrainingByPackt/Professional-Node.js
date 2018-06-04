const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

module.exports = (db, tokenSecret) => {
    const users = db.sublevel('users');
    const authService = {};

    authService.login = (username, password, callback) => {
       // ... same as in previous version
    };

    authService.checkToken = (token, callback) => {
        // ... same as in the previous version
    };

    return authService;
};