function fizzBuzz(n) {
  for (var i=1; i <= n; i++) {
    if (i % 15 == 0)
      printResult("FizzBuzz");
    else if (i % 3 == 0)
      printResult("Fizz");
    else if (i % 5 == 0)
      printResult("Buzz");
    else
      printResult(i);
  }
}

function printResult(logMsg) {
  console.log(logMsg);
}

function printResultAsync(message) {
  setTimeout(() => console.log(message), 100);
}

fizzBuzz(20);
