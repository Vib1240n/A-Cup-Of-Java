const express = require("express");
const { session } = require("../Authentication/passportConfig");
const router = express.Router();
const passport = require("../Authentication/passportConfig");

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
    var redir = { redirect: "/home" };
    return res.json(redir);
  }
});

router.post("/signup", passport.authenticate("local-signup"), (req, res) => {
  if (req.user) {
    var redir = { redirect: "/MyProfile" };
    return res.json(redir);
  } else {
    var redir = { redirect: "/home" };
    return res.json(redir);
  }
});

router.get("/MyProfile", (req, res) => {
  User.find({ user: req.user }, function (err, user) {
    if (err) console.log(err);

    const { firstName, lastName, username } = user;

    res.status(200).send({
      username: username,
      firstName: firstName,
      lastName: lastName,
    });
  });
});
module.exports = router;
