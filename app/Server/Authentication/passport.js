const bcrypt = require("bcrypt");
const User = require("../model/user");
const localStrategy = require("passport-local").Strategy;

/* Password aunthentication strategy:
   aunthenticates user by verifying an email and password
   findOne() function is used to find one user that maches the given email
*/

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!User) {
          console.log("User doestnt exist");
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  /* Establish login sesssion
       
       When login session is established, info about the user will be stored in session.
       Information will be supplied by seralizeUser() function.
    */

  // seralizeUser is used to persist user data after sucessful authentication
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  // deseralizeUser is used to retrieve user data from session
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};
