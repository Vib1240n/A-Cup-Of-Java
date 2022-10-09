const express = require("express");
const { session } = require("../Authentication/passportConfig");
const router = express.Router();
const passport = require("../Authentication/passportConfig");

const User = require("../model/user");
const { giveAuthentication, checkAuthentication } = require("../Authentication/Authentication");
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

router.get("/profile", checkAuthentication, function(req, res) {
  res.send(req.user);
});

router.post("/logout", function(req, res, next) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    var redir = { redirect: "/home" };
    return res.json(redir);
  });
});

module.exports = router;