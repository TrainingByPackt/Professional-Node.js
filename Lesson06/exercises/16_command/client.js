const createSendStatusCmd = require('./createSendStatusCmd');
const statusUpdateService = require('./statusUpdateService');
const Invoker = require('./invoker');


const invoker = new Invoker();

const command = createSendStatusCmd(statusUpdateService, 'HI!');

invoker.run(command);
invoker.undo();
invoker.delay(command, 1000 * 60 * 60);
invoker.runRemotely(command);