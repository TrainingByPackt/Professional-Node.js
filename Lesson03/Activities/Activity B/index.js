const fs = require('fs');
const async = require('async');

const api_key = 'your_api_key';
const domain = 'sandboxdomain.mailgun.org';
const sender = 'sender@email.org';
const recipient = 'recipient@email.org';

const config = {
    apiKey: api_key,
    domain: domain
};

const mailgun = require('mailgun-js')(config);
const subject = 'Professional Node.js - Chapter 3: Exercise 2';

let emailQueue = async.queue((taskdata, callback) => {
    send(taskdata.filename, taskdata.content, callback);
}, 2);

function readFiles(dirname, callback) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            return callback(err);
        }

        filenames.forEach(function(filename) {
            let completed = 0, hasErrors = false;
            const content = fs.readFileSync(dirname + filename, 'utf-8');

            let taskData = {
                filename: filename,
                content: content
            };

            fs.writeFileSync("./outbox/" + filename, content);
            console.log("Read filename: " + filename);

            emailQueue.push(taskData, (err) => {
                if (err) {
                    hasErrors = true;
                    console.log("Error running the task for file: " + dirname + filename, err);
                    return callback(err);
                }
                if (++completed === filenames.length && !hasErrors) {
                    callback();
                }
            });
        });
    });
}

readFiles('./drafts/', (err) => {
    if (err) {
        console.log(err);
        process.exit();
    } else {
        console.log('Email sending complete');
    }
});

function send(filename, content, callback) {
    console.log("Reading filename: " + filename);
    const data = {
        from: `Packt User <${sender}>`,
        to: recipient,
        subject: subject,
        text: content
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log("Problem sending email", error);
            return callback(error);
        } else {
            console.log("Sending: " + filename);
            fs.writeFileSync("./sent/" + filename, body);
            callback();
        }
    });
}