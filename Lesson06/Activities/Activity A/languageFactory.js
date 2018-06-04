const English = require('./English');
const French = require('./French');
const Spanish = require('./Spanish');
const German = require('./German');
const Japanese = require('./Japanese');
const Chinese = require('./Chinese');

module.exports = function detectLanguage(greetingBuffer) {
  "use strict";

  const greeting = greetingBuffer.toString();
  console.log("Greeting: ", greeting);

  if (greeting.match(/hello/)) {
    return new English();
  } else if (greeting.match(/bonjour/)) {
    return new French();
  } else if (greeting.match(/ola/)) {
    return new Spanish();
  } else if (greeting.match(/hallo/)) {
    return new German();
  } else if (greeting.match(/konnichiwa/)) {
    return new Japanese();
  } else if (greeting.match(/ni hao/)) {
    return new Chinese();
  }
};