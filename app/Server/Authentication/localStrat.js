const User = require("../model/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const localStrat = new localStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      return done("User does not exist, please sign up!", false);
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) throw err;
      if (result == true) {
        return done(null, user);
      } else {
        return done("Password is incorrect, please try again!", false);
      }
    });
  });
});

module.exports = localStrat;
