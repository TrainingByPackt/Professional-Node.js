# Coding with Streams - Flowing Books

In this exercise we want to demonstrate the ability for us to streams content, parts at a time.

In our example we have the first chapter of Moby Dick in the file `books/mobydick.txt`. Our task in this exercise is to:

* Read from the file `books/mobydick.txt`
* Stream all of the file out to console using the `on data` event of streams
* Simulate each word being read out from the book.
 
To simulate reading the words...

* Pause for a reasonable amount of reading time
* Read each word from the chunk out at a time
