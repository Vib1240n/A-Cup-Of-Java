const User = require("../model/user");
const passport = require("passport");
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

passport.serializeUser((username, done) => {
  done(null, username);
});

passport.deserializeUser(async (username, done) => {
  const user = await User.findOne({ username: username });
  done(null, user);
});

passport.use("local", localStrategy);
passport.use("local-signup", registerStrategy);

module.exports = passport;
