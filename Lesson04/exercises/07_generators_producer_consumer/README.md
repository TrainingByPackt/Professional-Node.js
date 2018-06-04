# Exercise - Producer Consumer Spider

Following on from the previous exercises in the book in relation to creating a web crawler spider. 

Using several of the concepts covered in the book, produce, using an adaptation of Version 4 of the spider, a crawler that utilises the producer-consumer design pattern.

Make use of the TaskQueue class and use generators and the co library to crawl www.google.co.uk

Example `package.json`

```$javascript
{
  "name": "spider-producer-consumer",
  "version": "1.0.0",
  "description": "",
  "main": "spider-producer-consumer.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cheerio": "^0.17.0",
    "co": "^4.6.0",
    "mkdirp": "^0.5.1",
    "path": "^0.12.7",
    "request": "^2.83.0",
    "slug": "^0.9.1",
    "thunkify": "^2.1.2"
  }
}
```

Install the packages using the following command:

```
npm install
```

Run the file `spider-producer-consumer` using the following command:

```
node spider-producer-consumer.js http://www.google.co.uk
```

It should produce output that is similar to the following:

```
Downloading http://www.google.co.uk
Downloaded and saved http://www.google.co.uk
Downloading https://www.google.co.uk/webhp?tab=ww
Downloading http://www.google.co.uk/imghp?hl=en&tab=wi
Downloading https://www.google.co.uk/intl/en/options/
Downloading http://www.google.co.uk/shopping?hl=en&tab=wf
Downloading http://www.google.co.uk/finance?tab=we
Downloading https://www.google.co.uk/intl/en/options/
Downloading http://www.google.co.uk/preferences?hl=en
Downloading http://www.google.co.uk/preferences?hl=en
Downloading http://www.google.co.uk/history/optout?hl=en
Downloading http://www.google.co.uk/search?site=&ie=UTF-8&q=New+Year%27s+Eve+2017&oi=ddle&ct=new-years-eve-2017-static-4763419491172352-l&hl=en-GB&sa=X&ved=0ahUKEwiEl9OCzbTYAhXpA8AKHc7ZBwUQPQgD
Downloading http://www.google.co.uk/advanced_search?hl=en-GB&authuser=0
Downloading http://www.google.co.uk/language_tools?hl=en-GB&authuser=0
Downloading http://www.google.co.uk/intl/en/ads/
Downloading http://www.google.co.uk/services/
Downloading http://www.google.co.uk/intl/en/about.html
Downloading http://www.google.co.uk/setprefdomain?prefdom=US&sig=__E5yvTPXk5lAHSs2oB5PDYKY7AHM%3D
Downloading http://www.google.co.uk/intl/en/policies/privacy/
Downloading http://www.google.co.uk/intl/en/policies/terms/
Downloaded and saved http://www.google.co.uk/intl/en/policies/terms/
Downloaded and saved http://www.google.co.uk/imghp?hl=en&tab=wi
Downloaded and saved http://www.google.co.uk/intl/en/policies/privacy/
Downloaded and saved http://www.google.co.uk/shopping?hl=en&tab=wf
Downloaded and saved http://www.google.co.uk/history/optout?hl=en
Downloaded and saved http://www.google.co.uk/services/
Downloaded and saved https://www.google.co.uk/webhp?tab=ww
Downloaded and saved http://www.google.co.uk/setprefdomain?prefdom=US&sig=__E5yvTPXk5lAHSs2oB5PDYKY7AHM%3D
Downloaded and saved http://www.google.co.uk/intl/en/about.html
Downloaded and saved http://www.google.co.uk/intl/en/ads/
Downloaded and saved http://www.google.co.uk/preferences?hl=en
Downloaded and saved http://www.google.co.uk/preferences?hl=en
Downloaded and saved http://www.google.co.uk/language_tools?hl=en-GB&authuser=0
Downloaded and saved http://www.google.co.uk/advanced_search?hl=en-GB&authuser=0
Downloaded and saved http://www.google.co.uk/search?site=&ie=UTF-8&q=New+Year%27s+Eve+2017&oi=ddle&ct=new-years-eve-2017-static-4763419491172352-l&hl=en-GB&sa=X&ved=0ahUKEwiEl9OCzbTYAhXpA8AKHc7ZBwUQPQgD
Downloaded and saved https://www.google.co.uk/intl/en/options/
Downloaded and saved https://www.google.co.uk/intl/en/options/
Downloaded and saved http://www.google.co.uk/finance?tab=we
Download complete
```

Best of luck!