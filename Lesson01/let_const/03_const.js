// Our beloved Dr Emmett Brown from Back to the Future has a number of characteristic features!
// Clearly he's not a horrible guy (maybe slightly insane and misguided).
// Change the code snippets below by using the 'const' keyword to prevent his characteristic
// "Crazy Hair" from being overridden by a nasty trait...

var trait1 = "Crazy Hair";
var trait2 = "Charisma";
var trait3 = "Mental State that borders on Insanity";

var characteristics = [];

var title = "Dr."
var firstname = "Emmett";
var surname = "Brown";

console.log("Name: " + title + " " + firstname + " " + surname);
console.log("Traits: ");

trait1 = "Horrible Person.js";

characteristics.push(trait1, trait2, trait3);

for (var i = 0; i < characteristics.length; i++) {
    console.log(characteristics[i]);
}