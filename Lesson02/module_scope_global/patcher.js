//file patcher.js

// ./logger is another module
require('./logger').customMessage = () => console.log('This is new functionality');
