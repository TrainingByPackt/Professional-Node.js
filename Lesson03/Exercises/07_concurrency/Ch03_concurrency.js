const task1 = function() {
  console.log("Executing Task 1");
};

const task2 = function() {
  console.log("Executing Task 2");
};

const task3 = function() {
  console.log("Executing Task 3");
};

const tasks = [];
tasks.push(task1);
tasks.push(task2);
tasks.push(task3);

let concurrency = 3, running = 0, completed = 0, index = 0;
function next() {                                             //[1]
  while(running < concurrency && index < tasks.length) {
    task = tasks[index++];
    task(() => {                                              //[2]
      if(completed === tasks.length) {
        return finish();
      }
      completed++, running--;
      next();
    });
    running++;
  }
}
next();

function finish() {
  console.log('All tasks finished');
}
