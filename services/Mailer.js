const mailgun = require("mailgun-js");

const keys = require("../config/keys");

class Mailer extends mailgun {
  constructor({ subject, recipients }, content) {
    super();

    this.data = {
      from: "Emaily <no-reply@emaily.herokuapp.com>",
      to: this.formatAdresses(recipients),
      subject: subject,
      html: content
    };
  }

  formatAdresses(recipients) {
    return recipients.join(" ,");
  }
}

module.exports = Mailer;
