const express = require("express");
const { session } = require("../Authentication/passportConfig");
const router = express.Router();
const passport = require("../Authentication/passportConfig");
const dotenv = require("dotenv");
dotenv.config({ path: "../app/Private/.env" });
const nodemailer = require("nodemailer");
const User = require("../model/user");

const {
  giveAuthentication,
  checkAuthentication,
} = require("../Authentication/Authentication");
const user = require("../model/user");
const Appointment = require("../model/appointment");

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
    return res.status(400).json(redir);
  }
});

router.get("/profile", function (req, res) {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(302).json({ message: "User not found" });
  }
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    var redir = { redirect: "/home" };
    return res.json(redir);
  });
});

router.post("/appointment", async function (req, res) {
  if (req.isAuthenticated()) {
    const { date, time, username, message } = req.body;
    const newAppointment = new Appointment({
      date,
      time,
      username,
    });
    await newAppointment.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "acesbarbershopappointment@gmail.com",
        pass: process.env.emailPassApp,
      },
    });
    const mailOptions = {
      from: "acesbarbershopappointment@gmail.com",
      to: "alex@s3v.us" || username,
      subject: "Appointments",
      text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("Appointment saved");
    res.json(newAppointment);
  }else {
    res.status(404).json({ redirect: "/home" });
  }
});

module.exports = router;
