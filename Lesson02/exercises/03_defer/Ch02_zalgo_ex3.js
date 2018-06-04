function fizzBuzz(n) {
  for (var i=1; i <= n; i++) {
    if (i % 15 == 0)
      console.log("FizzBuzz");
    else if (i % 3 == 0)
      console.log("Fizz");
    else if (i % 5 == 0)
      setTimeout(() => console.log("Buzz"), 100);
    else
      console.log(i);
  }
}

fizzBuzz(20);
