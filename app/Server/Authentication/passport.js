const bcrypt = require("bcrypt");
const User = require("../model/user");
const passport = require("passport");
const localStrategy = require("./localStrat");
const registerStrategy = require("./registerStrat");

/* Password aunthentication strategy:
   aunthenticates user by verifying an email and password
   findOne() function is used to find one user that maches the given email
*/
/* Establish login sesssion
       
       When login session is established, info about the user will be stored in session.
       Information will be supplied by seralizeUser() function.
    */

// seralizeUser is used to persist user data after sucessful authentication
passport.serializeUser((user, cb) => {
  cb(null, user.username);
});
// deseralizeUser is used to retrieve user data from session
passport.deserializeUser((username, cb) => {
  User.findOne({ username: username }, (err, user) => {
    const userInformation = {
      username: user.username,
    };
    cb(err, userInformation);
  });
});

passport.use("local", localStrategy);
passport.use("local-signup", registerStrategy);

module.exports = passport;
