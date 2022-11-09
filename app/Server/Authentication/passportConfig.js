const passport = require("passport");
const localStrategy = require("./localStrat");

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

module.exports = passport;
