const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.from = 'no-reply@emaily.com';
    this.subject = subject;
    this.content = content;
    this.recipients = recipients;
  }

  send() {
    const request = {
      to: this.recipients,
      from: this.from,
      subject: this.subject,
      content: [
        {
          type: 'text/html',
          value: this.content
        }
      ]
    };

    return sgMail.send(request);
  }
}

module.exports = Mailer;
