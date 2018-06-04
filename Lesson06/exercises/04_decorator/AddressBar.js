const EventEmitter = require('events').EventEmitter;

class AddressBar extends EventEmitter {

  constructor(window) {
    super();
    this.window = window;
  }

  init() {
    const _this = this;
    // initialise the address bar
    console.log('Initialising Address Bar...');
    _this.setCurrentUrl('http://www.google.co.uk');

    _this.registerHandler();
    _this.emitHandleEnter(_this.currentUrl);
  }

  setCurrentUrl(url) {
    this.currentUrl = url;
  }

  registerHandler() {
    this.on('handle_enter', (url) => {
      this.window.getHtmlRenderWindow().render(url);
    });
  }

  emitHandleEnter(url) {
    this.emit('handle_enter', url);
  }
}

module.exports = AddressBar;