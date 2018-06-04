class HtmlRenderWindow {

  constructor(settings) {
    this.settings = settings;
  }

  init() {
    console.log("Initialising HtmlRenderWindow...");
    let _this = this;
    let url = _this.settings.url;
    _this.render(url);
  }

  render(url) {
    console.log('Rendering url...' + url);
  }
}

module.exports = HtmlRenderWindow;