const fs = require('fs');

console.log('fs', fs);
const config = fs.readFileSync("./config/APP_ENV.json");

const properties = JSON.parse(config);

console.log("Environment: " + properties.environment);
console.log("HomepageUrl: " + properties.homepageUrl);

