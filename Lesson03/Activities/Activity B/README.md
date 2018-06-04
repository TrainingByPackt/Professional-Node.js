# Limiting Concurrency - Limited Emails to a Friend

Similar to Exercises 2 & 3, we are working with the email movie quotes exercise.

Using the Limited Concurrency pattern we need to do the following:

* Spawn X parallel tasks that stay strictly within a concurrency limit of 5 emails
* Each task then
** Loads the contents of each of the draft files
** Sends each of the emails with the movie quote as the body
** Reads the contents of the email from the `drafts` folder once we've read the contents of the file
** Once it has been successfully sent the email can then be moved to the `sent` folder (removing it from the drafts folder)
** If there is a failure we need to move the email to the `outbox` with the error written to the console

As we can see this is similar to exercises 2 & 3 in the core of the logic. We just have to change how the task is executed not the core of the algorithm.

## Mailgun

To simulate the benefits of limiting concurrency we are going to use a free email api called Mailgun (it provides up to 10,000 emails free every month so there's no risk of being charged for it).

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

Exercise folder: `04_limiting_concurrency`
Drafts folder: `04_limiting_concurrency/drafts`
Outbox folder: `04_limiting_concurrency/outbox`
Sent folder: `04_limiting_concurrency/sent`

## Project Setup

You will need to create a `package.json` file as normal and install the [`mailgun-js`](https://www.npmjs.com/package/mailgun-js) library in npm.


