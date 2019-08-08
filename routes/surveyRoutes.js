const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const keys = require("../config/keys");

const mailgun = require("mailgun-js")({
  apiKey: keys.mailgunPublicKey,
  domain: keys.mailgunDomain
});

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/send", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const mail = new Survey({
      title,
      subject,
      body,
      recipients,
      _user: req.user.id,
      dateSent: Date.now()
    });

    const data = {
      from: "Excited User <me@samples.mailgun.org>",
      to: recipients,
      subject: subject,
      text: body
    };

    mailgun.messages().send(data, (error, body) => {
      console.log(body);
      if (error) {
        console.log(error);
        return res.json({ error: "message not sent!" });
      }
      mail.save().then(data => {
        return res.redirect("/emails");
      });
    });
  });
};
