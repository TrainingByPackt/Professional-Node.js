const DBClient = require('./DbClient');

const createProxy = require('./ProxyDBClient');

const dbClient = new DBClient();

const result = dbClient.execute();
console.log("db client: " + result.text);

const proxy = createProxy(dbClient);
console.log('proxy', proxy);

console.log("Lazy Proxy object: " + proxy.execute().text);

const eager = proxy.execute().load();
console.log('Eager Proxy object: ' + eager.text);