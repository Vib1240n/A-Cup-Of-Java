const User = require("../model/user");
const passport = require("passport");
const localStrategy = require("./localStrat");
const registerStrategy = require("./registerStrat");

passport.serializeUser(function (User, done) {
  process.nextTick(function () {
    done(null, {
      username: User.username,
      firstname: User.firstName,
      lastname: User.lastName,
      phonenumber: User.phoneNumber,
    });
  });
});

passport.deserializeUser(function (User, done) {
  process.nextTick(function () {
    return done(null, User);
  });
});

passport.use("local", localStrategy);
passport.use("local-signup", registerStrategy);

module.exports = passport;
