# Exercise - Resource Swapping

In the earlier demo, we showed that you can use webpack to swap modules out at both build-time and run-time.

In this exercise we intend to demonstrate that you can also used webpack to replace resources dynamically at build-time based on some property.

For example, we could use an environment property that is passed to our application, such as if we are running in the production environment to drive which properties our application is using.

What you need to do is:

## Define the webpack

* Webpack reads the NODE_ENV property from the command line using the environment option (https://webpack.js.org/guides/environment-variables/)
* It replaces `/local/config.properties` with `/production/config.properties` if the environment variable passed in is equal to `production` e.g. `NODE_ENV=production`

Once done - you should write a function that loads the property file values and outputs the new values so you can confirm that the production properties are being loaded when the production environment is set on the environment options.









