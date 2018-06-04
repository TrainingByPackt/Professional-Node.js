function createTask(target, args) {
    return () => {
        target.apply(null, args);
    }
}

module.exports = createTask;