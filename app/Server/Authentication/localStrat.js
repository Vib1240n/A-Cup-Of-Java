const User = require("../model/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const localStrat = new localStrategy(
  { usernameField: "username", passReqToCallback: true },
  (req, username, password, done) => {
    User.findOne({ username: req.body.username }, (err, User) => {
      if (err) {
        throw err;
      }
      if (!User) {
        console.log("User doesnt exist");
        return done(null, false);
      }
      bcrypt.compare(password, User.password, (err, result) => {
        if (result === true) {
          return done(null, User);
        } else {
          return done(null, false);
        }
      });
    });
  }
);

module.exports = localStrat;
