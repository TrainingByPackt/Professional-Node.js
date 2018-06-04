const Subject = require('./subject');
const subject = Subject();

const Proxy = require('./proxy');
const proxy = Proxy(subject);

console.log("Printing results from proxy...");
console.log(proxy.hello());
console.log(proxy.goodbye());

const LiteralProxy = require('./literalProxy');
const literalProxy = LiteralProxy(subject);

console.log("Printing results from literal proxy...");
console.log(literalProxy.hello());
console.log(literalProxy.goodbye());

const AugmentedProxy = require('./augmentedProxy');
const augmentedProxy = AugmentedProxy(subject);

console.log("Printing results from augmented proxy...");
console.log(augmentedProxy.hello());
console.log(augmentedProxy.goodbye());