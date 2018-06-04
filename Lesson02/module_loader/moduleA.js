//load another dependency
const moduleB = require('./moduleB');

//the API to be exported for public use
module.exports.run = () => {
    moduleB.log();
};
