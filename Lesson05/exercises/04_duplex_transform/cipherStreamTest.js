const CipherStream = require('./cipherStream');

const cs = new CipherStream();

cs.on('data', chunk => console.log(chunk.toString()));

cs.write("xfmdpnf up uif cfbvujgvm xpsme pg tusfbnt");
cs.end();