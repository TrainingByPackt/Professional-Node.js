// Disappearing DOM
// Imagine you have a number of DOM elements on a page and these DOM elements are stored in a map prior to being displayed as HTML.
// Initially when the DOM elements are added to the view they are also registered to the Window object in the Map

// Using the ES2016 WeakMap syntax demonstrate the use of the WeakMap by adding DOM elements to the Browser window and then removing them from the browser window later on.

// Once removed from the window object those dangling DOM elements will now be cleaned up.
// DOM elements can just be represented by a simple object for simplicities sake and not a real DOM element - same with the Window object.