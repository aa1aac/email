const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const keys = require("../config/keys");

const mailgun = require("mailgun-js")({
  apiKey: keys.mailgunPrivateKey,
  domain: keys.mailgunDomain
});

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/send", requireLogin, requireCredits, (req, res) => {
    const { subject, body, recipient } = req.body;

    const mail = new Survey({
      title: subject,
      subject,
      body,
      recipient,
      _user: req.user.id,
      dateSent: Date.now()
    });

    const data = {
      from: "Excited User <me@samples.mailgun.org>",
      to: recipient,
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
        req.user.credits -= 1;
        req.user
          .save()
          // Users.findByIdAndUpdate(req.user._id, { credits: req.user.credits-- })
          .then(() => {
            return res.json({ message: "message sent" });
          });
      });
    });
  });

  app.get("/api/sent", (req, res) => {
    Survey.find({ _user: req.user._id }).then(sentEmails => {
      res.json(sentEmails);
    });
  });
};
