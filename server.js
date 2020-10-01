const express = require("express");
const mongoose = require("mongoose");

// Authentication
const cookieParser = require('cookie-parser');
const session = require('express-session'); // Session Management
const MongoStore = require('connect-mongo')(session); // To store in MongoDB

const routes = require("./routes");

// Passport
const auth = require('./lib/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/requestLineDB", //update db name
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  }
);

// Authentication
app.use(cookieParser()); // will return cookies in request.cookies
app.use(session({
  secret: 'secret 12345', // sign session to prevent tempering
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

// Passport -> must be loaded after session is initialized
app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);

app.use(async (req, res, next) => {
  try {
    // Authentication (visit counter)
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    return next();
  } catch (err) {
    return next(err);
  }
});


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

