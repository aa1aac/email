const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const keys = require("./config/keys");

require("./models/User"); // user model mongoose

require("./services/passport"); //passport middleware

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // for routing authRoutes
require("./routes/billingRoutes")(app); // for routing of billing

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("deployed"));
// 101
