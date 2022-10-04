const express = require("express");
const router = express.Router();
const async = require("hbs/lib/async");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);
const hash = require("../Authentication/passwordHash");
const bycrpt = require("bcrypt");
const passport = require("../Authentication/passportConfig");
const passportLocal = require("passport-local").Strategy;
const User = require("../model/user");
// const {
//   giveAuthentication,
//   checkAuthentication,
// } = require("../Authentication/Auth");
const user = require("../model/user");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  if (req.user) {
    var redir = { redirect: "/MyProfile" };
    return res.json(redir);
  } else {
    var redir = { redirect: "/login" };
    return res.json(redir);
  }
});

router.post("/signup", async (req, res, next) => {
  passport.authenticate("local-signup", function (err, user, info) {
    if (err) {
      console.log(err);
    }
    req.logIn(user, function (err, data) {
      if (err) {
        console.log(err);
        var redir = { redirect: "/login" };
        return res.json(redir);
      }
      return res.json(user);
    });
  })(req, res);
});

router.get("/MyProfile", (req, res) => {
  User.findOne(
    { username: req.session.passport.user.username },
    function (err, user) {
      if (err) console.log(err);

      const { firstName, lastName, username } = user;

      res.status(200).send({
        firstName,
        lastName,
        username,
      });
    }
  );
});
module.exports = router;
