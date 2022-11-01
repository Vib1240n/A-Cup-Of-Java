const User = require("../model/user");                        //Password config is used to verify the password when the user is logging in. 
const passport = require("passport");                         // also to check that email is in the database.
const localStrategy = require("./localStrat");
const registerStrategy = require("./registerStrat");
// seralizeUser is used to persist user data after sucessful authentication
// passport.serializeUser((user, cb) => {
//   cb(null, user.username);
// });
// // deseralizeUser is used to retrieve user data from session
// passport.deserializeUser((username, cb) => {
//   User.findOne({ username: username }, (err, user) => {
//     const userInformation = {
//       username: user.username,
//     };
//     cb(err, userInformation);
//   });
// });

passport.serializeUser(function (user, done) {
  process.nextTick(function() {
    done(null, { username: user.username,
    firstname: user.firstName,
    lastname: user.lastName });
  });
});

passport.deserializeUser(function (user, done) {
  process.nextTick(function() {
    return done(null, user);
  })
});

passport.use("local", localStrategy);
passport.use("local-signup", registerStrategy);

module.exports = passport;