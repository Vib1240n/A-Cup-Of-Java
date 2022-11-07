const User = require("../model/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const localStrat = new localStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, User) => {
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
});

module.exports = localStrat;
