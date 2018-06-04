# Coding with Streams - Reading Streams

To demonstrate Reading Streams you will read an image using non-flowing streams from one file and write it another with the exact same contents.

What you will need to do:
* Implement a stream that reads from a file in `images/input/dilbert.jpeg` 
* Writes out the content of the buffers to the file `images/output/dilbert.jpeg`
* To ensure that the images are exactly the same you should generate a hash that is based on the hash of each chunk of data that is streamed (read) from each image. Compare the hash produced from the read image with the image that was written. You can do this by using `sha1`

Hint: You may need to make use of the `fs` standard library that comes bundled as a Core NodeJS library. 