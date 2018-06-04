function createScrollbarWindow(window) {

  const ScrollbarWindow = window;

  ScrollbarWindow.adjustWindowSize = (height, width) => {
    this.height = height;
    this.width = width;
  };

  function ScrollbarComponent() {

    const _this = ScrollbarWindow;

    return {
      init() {
        console.log("Initialising Scrollbar...");
        this.listenResize();
      },

      listenResize() {
        let scrollbar = this;

        ScrollbarWindow.on('resize', (settings) => {
          console.log('Resize event fired...');

          ScrollbarWindow.adjustWindowSize(settings.height, settings.width);

          if (settings.height > _this.getContentSettings().height
              || settings.width > _this.getContentSettings().width) {
            scrollbar.showScrollbar();
          } else {
            this.hideScrollbar();
          }
        });
      },

      showScrollbar() {
        console.log("Scrollbar shown!");
        this.visible = true;
      },

      hideScrollbar() {
        console.log("Scrollbar hidden!");
        this.visible = false;
      }
    };
  }

  ScrollbarWindow.includeComponents = (components) => {
    window.getComponents().push(components);

    components.forEach(component => {
      component.init();
    });
  };

  this.components = [];
  this.components.push(new ScrollbarComponent());

  ScrollbarWindow.includeComponents(components);

  return ScrollbarWindow;
}

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