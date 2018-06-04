class Profiler {
    constructor(label) {
        this.label = label;
        this.lastTime = null;
    }

    start() {
        this.lastTime = process.hrtime();
    }

    end() {
        const diff = process.hrtime(this.lastTime);
        console.log(
            `Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]} nanoseconds.`
        );
    }
}

module.exports = function(label) {
  if (process.env.NODE_ENV === 'development') {
      return new Profiler(label);
  }  else if (process.env.NODE_ENV === 'production') {
      return {
          start: function() {},
          end: function() {}
      }
  } else {
      throw new Error('Must set NODE_ENV');
  }
};