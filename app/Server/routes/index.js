const express = require("express");
const router = express.Router();
const async = require("hbs/lib/async");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);
const hash = require("../Authentication/passwordHash");
const bycrpt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const User = require("../model/user");
// const {
//   giveAuthentication,
//   checkAuthentication,
// } = require("../Authentication/Authentication");

//post login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
