## Email Survey

It is an app which helps the user to send email survey.

### Technologies used

MERN stack

### To Run the development server of the app:

Run the following command:

```
npm run dev
```

### ** Note the files you really need to change to run the app**

#### On development build

create a file called dev.js in config folder. After that, add these to the file.

---

```
module.exports = {
    googleClientID:"" ,                // add your googleClientId here for Oauth
    googleClientSecret: "",           // add your googleClientSecret here for Oauth
    mongoURI:"",                      // add your mongoDB URI
    cookieKey:"",                    // add cookie key for cookie session
    stripePublishableKey:"",        // add stripe publishable key
    stripeSecretKey:"",             // add stripe secret key
    mailgunPublishableKey:""       // add mailgun publishable key
  };

```

<br>
These are just the api keys that you need to create and add in the file.
<br>
Also create two files called ".env.development" and ".env.production" in client directory and add the following:

<br>

```
REACT_APP_STRIPE_KEY=   // add stripe publishable key here
```

#### On production build

add env variables with the names as in the file prod.js. Please, check the file 'prod.js'.
