const fizzBuzz = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "Fizz Buzz"];

const noFizzes = fizzBuzz.filter(function(fb) {
    return fb !== "Fizz";
});

console.log(noFizzes);

// convert this example to use the arrows function rather than the function