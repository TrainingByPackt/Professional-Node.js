const fs = require('fs');

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

const filenames = fs.readdirSync('./drafts/');

const emailTasks = buildEmailTasks('./drafts/', filenames);
processEmailTasks(emailTasks);

function buildEmailTasks(dirname, filenames) {
    const emails = [];
    filenames.forEach(function(filename) {
        emails.push(() => {
            const content = fs.readFileSync(dirname + filename, 'utf-8');
            console.log("Read filename: " + filename);

            fs.writeFileSync("./outbox/" + filename, content);

            const data = {
                from: 'Packt User <' + sender + '>',
                to: recipient,
                subject: subject,
                text: content
            };

            mailgun.messages().send(data, function (error, body) {
                console.log("Sending: " + filename);

                if (!error) {
                    fs.writeFileSync("./sent/" + filename, body);
                } else {
                    console.log("Error sending email via mailgun: " + error);
                }
            });
        });
    });

    return emails;
}

function processEmailTasks(tasks) {
    let completed = 0;
    tasks.forEach(task => {
        task(() => {
            if(++completed === tasks.length) {
                finish();
            }
        });
    });
}

function finish() {
    console.log("Processing emails is done!");
}