const User = require("../model/user");
const passport = require("passport");
const localStrategy = require("./localStrat");
const registerStrategy = require("./registerStrat");

passport.serializeUser(function (user, done) {
  process.nextTick(function () {
    done(null, {
      username: user.username,
      firstname: user.firstName,
      lastname: user.lastName,
      phonenumber: user.phoneNumber,
    });
  });
});

passport.deserializeUser(function (user, done) {
  process.nextTick(function () {
    return done(null, user);
  });
});

passport.use("local", localStrategy);
passport.use("local-signup", registerStrategy);

module.exports = passport;
