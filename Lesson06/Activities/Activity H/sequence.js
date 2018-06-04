module.exports = function sequence(tasks) {
  var current = Promise.resolve();
  for (var k = 0; k < tasks.length; ++k) {
    current = current.then(tasks[k]);
  }
  return current;
};