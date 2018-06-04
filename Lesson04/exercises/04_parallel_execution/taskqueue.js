class TaskQueue {
  constructor(concurrency) {
    console.log('Initialising TaskQueue with concurrency of ' + concurrency);
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    while(this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      task(() => {
        this.running--;
        this.next();
      });
      this.running++;
    }
  }
}

module.exports = TaskQueue;
