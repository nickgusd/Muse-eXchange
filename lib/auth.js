const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Looks for email
passport.use(new LocalStrategy(
  { usernameField: 'email' }, 
  async (username, password, done) => {
    try {
      const user = await User.findOne({email: username}).exec();
      // Check if username or email exist in MongoDB
      if(!user) {
        return done(null, false, {message: 'Invalid username of password'});
      }
      // Check if password is correct
      const passwordOK = await user.comparePassword(password);
      if(!passwordOK) {
        return done(null, false, {message: 'Invalid username of password'});
      }

      return done(null, user); // return a valid user

    } catch(err) {
      return done(err);
    }
}));

// Serialize - saved to session
passport.serializeUser((user, done) => done(null, user._id));

// Key is matched with the in memory array / database or any data resource.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).exec();
    return done(null, user); // user object attaches to the request as req.user
  } catch(err) {
    return done(err);
  }
})

module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    // If user is logged in, Passport will give us the current user.
    console.log(req.user);
    res.locals.user = req.user;
    return next();
  }
};