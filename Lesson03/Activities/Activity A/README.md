# Avoiding Callback Hell - Convert Images without Pyramid of Doom

In our example we have an Image Convertor application that uses the jimp library to convert two (hilarious) .png images into a jpeg equivalent.

For arguments sake, let's imagine that this ImageConvertor accepts the location of the two images in a job queue (essentially an array). It's job is just to read those images from the file, pass it to the library to convert the images and then write them back to another directory to store the result. It also needs to then record whether the operation was a success in a lightweight database using the [LevelUP](https://github.com/Level/levelup) library developed by Google.

For example, the two images we have are located in the following two locations within each sub-project folder:

```
img/wat1.png
img/wat2.png
```

Let's also say for arguments sake that we only have one Node.js application in which to perform this task - essentially if we plan on handling it asynchronously we can do so with callbacks. However, as you shall see from the `pyramidOfDoom` example this is horrendous.

It is your task to convert this 'pyramid of doom' monstrosity into code that is more readable using the techniques we have discussed.
You will also need to write a record in database to say that the job is complete

We would like to output these images in the jpeg format to a `/tmp` directory with the names `wat1.jpeg` and `wat2.jpeg`

The application can be executed using:

```
node image-convertor.js
```

The initial project that you will improve is contained in the `pyramidOfDoom` folder. You will notice that it contains code that is not readable. You'll need to take this code and apply best practices and principles we've picked up in the previous content. 

To summarise you need to do the following:

* Initialise a queue with the correct relative paths to the images
* Convert and same the image using the library to another folder
* Write a message to a database 

## Callback Discipline

It's possible for us to use vanilla javascript in order for us to resolve issues with our callback code. We can apply best practices to ensure that our code is kept clean and readable. 

Remember to clear up our previous `Pyramid of Doom` we need to apply the following principles:

* You must exist as soon as possible. Use `return`, `continue` or `break`, depending on the context, to immediately exit the current statement instead of writing (and nesting) complete `if...else` statements. This will help keep our code shallow.
* You need to create named functions for callbacks, keeping them out of closures and passing intermediate results as arguments. Naming our functions will also make them look better in stack traces.
* You need to modularize the code. Split the code into smaller, reusable functions whenever it's possible. 

Good luck!
  