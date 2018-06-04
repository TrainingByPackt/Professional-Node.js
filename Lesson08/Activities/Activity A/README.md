# Exercise: HTTP UMD Module

In this example your task is to do the following:

## Express Server

* Set up an express.js server
* Configure a `GET` `/say?message=Hello%20World` 
* When it receives the GET request it responds by logging out the message received that was passed to the endpoint

## HTTP Client

* Wrap an HTTP client as a UMD Module that sends a message to the `/say` endpoint

The server should console.log out the message passed via the parameter from the client. This will prove that the umdModule is correctly working as expected. 

