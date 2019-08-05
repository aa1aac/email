const mailgun = require("mailgun-js");

const keys = require("../config/keys");

class Mailer extends mailgun {
  constructor({ subject, recipients }, content) {
    super();

    this.data = {
      from: "Emaily <no-reply@emaily.herokuapp.com>",
      to: this.formatAdresses(recipients).join(", "),
      subject: subject,
      html: content
    };

    this.addClickTracking()
  }

  addClickTracking() {
     
   }

  formatAdresses(recipients) {
    return recipients.map(({ email }) => {
      return email;
    });
  }
}

module.exports = Mailer;
