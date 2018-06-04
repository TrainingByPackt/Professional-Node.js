# Mock DB Proxy

A classic use case of the Proxy pattern is to simulate a much cheaper operation for a more expensive one.

In this example we have a DB Client that returns an expensive object (for the purposes of simplicity in this example we just return a simple object).

Use the proxy pattern to simulate retrieving a cheaper object without requiring hitting the database...

Our app.js file might look as follows...

```$javascript
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
```

Note: We call `load` on the proxy object to retrieve the eager expensive version of the Proxy object. 