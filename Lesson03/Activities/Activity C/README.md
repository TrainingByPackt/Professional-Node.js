# Parallel Execution - Email Movie Quotes

In this exercise, we have an number of different emails, the contents of which is stored in a variety of different files inside an `drafts` folder. 

Using the Unlimited Sequential Execution pattern we want to perform the following:

* Load the contents of each of the `drafts` from the files
* Send each of the emails with parallel execution
* Once we've read the contents of the email from the `drafts` folder and are ready to send it put the email in the `outbox`
* Once we have successfully sent the email we can then move it to the `sent` folder (removing it from the `outbox`).
* If there is a failure to send then the email stays in the `outbox` with the error written to the console.

## Mailgun

To simulate the benefits of parallel execution we are going to use a free email api called Mailgun (it provides up to 10,000 emails free every month so there's no risk of being charged for it).

You can sign up for mailgun [here](https://signup.mailgun.com/new/signup)

### Mailgun Credentials

Once you have signed up, you will need to sign-in to the account dashboard.
Click on the domains tab and create a domain (you can't use a sandbox).

Once a domain is created you should have an API key.

Set the following details in the index.js file

```$javascript
const api_key = 'your_api_key';
const domain = 'sandboxdomain.mailgun.org';
const sender = 'sender@email.org';
const recipient = 'recipient@email.org';
```

Once set, you should be able to correctly send emails to your email address using Mailgun.

## Project Structure

Exercise folder: `02_sequential_execution`
Drafts folder: `02_sequential_execution/drafts`
Outbox folder: `02_sequential_execution/outbox`
Sent folder: `02_sequential_execution/sent`

## Project Setup

You will need to create a `package.json` file as normal and install the [`mailgun-js`](https://www.npmjs.com/package/mailgun-js) library in npm.



