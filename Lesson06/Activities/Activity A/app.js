var stdin = process.openStdin();

const languageFactory = require('./languageFactory');
console.log("Please say hello in your language of choice...");

stdin.addListener("data", function(data) {

  const language = languageFactory(data.toString().trim());
  language.hi();
  console.log("Please say hello in your language of choice...");
});



//
// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);
//
//
//
// rl.question("Say hello: ", input =>
// {
//   if (handler(input) !== false)
//   {
//     promptInput("Say hello: ", handler);
//   }
//   else
//   {
//     rl.close();
//   }
// });
//
// promptInput('hi!', input =>
// {
//   const language = languageFactory(input);
//   console.log("Language detected: " + language.hi());
// });