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

    this.contentHeight = this.properties.content.height;
    this.contentWidth = this.properties.content.width;

    _this.initialise();
  }

  init() {

  }

  getHtmlRenderWindow() {
    return this.htmlRenderWindow;
  }

  getComponents() {
    return this.components;
  }

  getContentSettings() {
    return this.properties.content;
  }

  initialise() {
    this.components.forEach(component => {
      component.init();
    });
  }
}

module.exports = new Window();