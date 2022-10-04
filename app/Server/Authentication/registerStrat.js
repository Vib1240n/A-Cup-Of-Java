const User = require("../model/user");
const hash = require("../Authentication/passwordHash");
const Strategy = require("passport-local").Strategy;

const registerStrat = new Strategy(
  { usernameField: "username", passwordField: "password" },
  { passReqToCallback: true},
  async (req, username, password, done) => {
    if (User.findOne({ username: username })) {
      return done(null, false, { message: "Username already exists" });
    } else {
      const hashedPassword = await hash(password);
      const user = new User({
        username: username,
        password: hashedPassword,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
      });
      user.save((err) => {
        if (err) throw err;
        return done(null, user);
      });
    }
  }
);

module.exports = registerStrat;
