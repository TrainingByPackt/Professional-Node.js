# Sequential Palindromes

It is very common in real-world applications for you to need to process a number of tasks in a specified order. That order is sometimes just dictated by the order in which those tasks are received. One typical use case would be to receive tasks or messages off a queue and process them in order.

In this example we will be using an Array as opposed to a queue, since we want to demonstrate the principles of a queue separately in later chapters.

Your task is to:

* Process each word in the order in which it appears in the queue
* Work out which words or phrases are palindromes ignoring any spaces, special characters or uppercase characters

_Palindrome Definition_: a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

* Initialise an array with a number of different words or phrases:

```
1 Fizz
2 Buzz
3 Aibohphobia
4 Node is awesome
5 Hannah
6 Javascript is asynchronous by nature
7 Nurses run
8 Red Lorry Yellow Lorry
9 A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!
```

* Process each word or phrase by pulling each task off the queue and working out if it is a palindrome or not
* Print out all palindromes that are found

The palindromes should be `Aibohphobia` (a fear of Palindromes), `Hannah` and `Nurses run`, `A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!`

They should also always be processed in the order in which they are processed e.g. `Hannah` and `Nurses Run` because we are sequentially process the tasks.

* Ensure those tasks are processed in the order in which they are declared.
* Process the messages using sequential promises

You should see the following output from the example:

```
➜  03_sequential_promise git:(master) ✗ node sequential-promise.js 
-------------------
Palindrome Results
-------------------
Palindrome @ index 0 - is Palindrome? false - Fizz
Palindrome @ index 1 - is Palindrome? false - Buzz
Palindrome @ index 2 - is Palindrome? true - Aibohphobia
Palindrome @ index 3 - is Palindrome? false - Node is awesome
Palindrome @ index 4 - is Palindrome? true - Hannah
Palindrome @ index 5 - is Palindrome? false - Javascript is asynchronous by nature
Palindrome @ index 6 - is Palindrome? true - Nurses run
Palindrome @ index 7 - is Palindrome? false - Red Lorry Yellow Lorry
Palindrome @ index 8 - is Palindrome? true - A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!
```

As you can see - we processed and output each result sequentially despite processing them using Promises asynchronously!
That means that each sequential task waited for the previous one to complete before continuing on.