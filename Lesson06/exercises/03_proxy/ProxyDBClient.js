function createProxy(subject) {
  return {
    execute() {
      return {
        text: "cheap local object",
        load: function () {
          return subject.execute()
        }
      }
    }
  }
}

module.exports = createProxy;