# Decorators - Enhancing the browser

Imagine we have an initial concept of a `Window`. The windows responsibility is to handle all user interactions and delegate them to the components that make up the Window, 
such as the HTMLRenderWindow.

Let's assume we have a `Window` object that looks as follows:

```$javascript
const HtmlRenderWindow = require('./HtmlRenderWindow');
const AddressBar = require('./AddressBar');
const EventEmitter = require('events').EventEmitter;

class Window extends EventEmitter {

  constructor() {
    super();
    const _this = this;
    this.components = [];

    _this.addressBar = new AddressBar(this);
    this.components.push(_this.addressBar);

    let settings = {
      'url': 'http://www.google.co.uk'
    };

    _this.htmlRenderWindow = new HtmlRenderWindow(settings);
    this.components.push(_this.htmlRenderWindow);

    _this.initialise();
  }

  init() {
    this.properties = {
      window: {
        height: 800,
        width: 600
      },
      content: {
        height: 800,
        width: 600
      }
    };
  }

  getHtmlRenderWindow() {
    return this.htmlRenderWindow;
  }

  getComponents() {
    return this.components;
  }

  initialise() {
    this.components.forEach(component => {
      component.init();
    });
  }
}

module.exports = new Window();
```

When the `Window` is instantiated it calls an `init` on each sub-component of the `Window` object.

The `HTMLRenderWindow`, one such component, is initialised with some settings. The settings include a bookmark url which the browser navigates to on load (basically a default url you load).

Now let's say we want to also enhance the `Window` object so that it also has a scrollbar that can receive a "MouseDragUp" and a "MouseDragDown" event that is also passed to it.

In some cases we want a `Window` to have a scrollbar but other times we don't. It would be expensive to extend the `Window` object and add the scrollbar functionality to it. You could argue that the scrollbar could also be added a sub-component but for the sake of this exercise let's add the scrollbar functionality to the Window object itself.

Your task is to use the Decorator pattern to add the `scrollbar` behaviour for listening to events to the resizing of the Window. When the `Window` is resized less than the height and width of the content then we want to tell the Scrollbar to show.

To demonstrate this, echo out the values of the window height and width. In addition show the size of the current content (this should remain static at 800x600). Then also echo out the fact that the property toggling the visibility of the `ScrollBar` object has changed from `false` to `true`.

When running the code you should see output similar to the following if you have successfully completed the task:

```$bash
➜  04_decorator git:(master) ✗ node app.js
Initialising Address Bar...
Rendering url...http://www.google.co.uk
Initialising HtmlRenderWindow...
Rendering url...http://www.google.co.uk
Initialising Scrollbar...
Resize event fired...
Scrollbar shown!
Resize event fired...
Scrollbar hidden!
```

As we can see, the scrollbar is hidden and shown using the following code:

```$javascript
const window = require('./Window');
const scrollbarWindow = createScrollbarWindow(window);

const larger = {
  height: 850,
  width: 600
};

scrollbarWindow.emit("resize", larger);

const smaller = {
  height: 750,
  width: 600
};

scrollbarWindow.emit("resize", smaller);
```