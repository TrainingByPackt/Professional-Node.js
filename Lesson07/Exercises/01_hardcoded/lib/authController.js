const authService = require('./authService');

exports.login = (req, res, next) => {
    console.log("calling login...");
    authService.login(req.body.username, req.body.password,
        (err, result) => {
            // ...
        }
    );
};

exports.checkToken = (req, res, next) => {
    authService.checkToken(req.query.token,
        (err, result) => {
            // ...
        }
    );
};