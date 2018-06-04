const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const app = module.exports = express();
app.use(bodyParser.json());

app.route('/say').get(function(req, res, next) {
    console.log('Responding to message: ' + req.query.message);
});

app.use(errorHandler());
http.createServer(app).listen(3001, () => {
    console.log('Express server started');
});