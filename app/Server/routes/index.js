const express = require("express");
const router = express.Router();
const passport = require("../Authentication/passportConfig");
const dotenv = require("dotenv");
dotenv.config({ path: "../app/Private/.env" });
const nodemailer = require("nodemailer");
const User = require("../model/user");
const hash = require("../Authentication/passwordHash");
//const emailValidator = require('deep-email-validator');
const validator = require("node-email-validation");


var log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type: "file", filename: "~/A-Cup-Of-Java/cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
var logger = log4js.getLogger('cheese'); 


//used to make sure email is an actual email and not jsut a random string
async function isEmailValid(email) {
  return emailValidator.validate(email)
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: "acesbarbershopappointment@gmail.com",
      pass: process.env.emailPassApp,
  },
});

//const user = require("../model/user");
const Appointment = require("../model/appointment");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  if (req.user) {
    //implementing status codes: 200, 201, 302, 400, 404, 500, 504
    var redir = { redirect: "/MyProfile" };
    return res.json(redir);
  } else {
    var redir = { redirect: "/home" };
    return res.json(redir);
  }
});

router.post("/signup", function (req, res) {
    User.findOne({ username : req.body.username}).lean().exec(async (err, user) => {
        if (err) {
          return res.status(500).json({ message: "Internal Server Error" });
        }
        if (user) {
          return res.status(400).json({ message: "User Already Exists" });
        }
        if(!validator.is_email_valid(req.body.username)){
          return res.status(401).json({ message: "Invalid Email" });
        }
        if (!user) {
          const encryptedPassword = await hash(req.body.password);
          let newUser = new User({
            username: req.body.username,
            password: encryptedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
          });
          


          newUser.save((error, inserted) => {
            if (error) {
              return res.status(500).json({ message: "Internal Server Error" });
            }
            passport.authenticate('local')(req, res, function () {
              return res.status(200).json(req.user);
            })
            let message = `Hello ${req.body.firstName} ${req.body.lastName}. Thank you for signing up with Ace's Barbershop We are located at 1049 Jefferson Blvd West Sacramento, CA 95691. For any questions please contact us at (916) 956-0670. We look forward to seeing you!`;

            const mailOptions = {
              from: "acesbarbershopappointment@gmail.com",
              to: req.body.username,
              subject: "Ace's Barbershop Account Confirmation",
              text: message,
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                  console.log(error);
              } else {
                  console.log("Email sent: " + info.response);
              }
            });
          });
        }
      });
    });

// router.post("/signup", passport.authenticate("local-signup"), (req, res) => {
//   if (req.user) {
//       var redir = {redirect: "/MyProfile"};
//       return res.json(redir);
//   } else {
//       var redir = {redirect: "/home"};
//       return res.status(500).json(redir);
//   }
// });

router.get("/profile", function (req, res) {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(302).json({ message: "User not found" });
  }
});

router.post("/logout", function (req, res, next) {
  if (req.isAuthenticated()) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Logged out" });
    });
  }
});

router.get("/getappointments", async (req, res) => {
  if (req.isAuthenticated()) {
    const { username } = req.user;
    const appointments = await Appointment.find({ username }).lean().exec();
    console.log(username);
    console.log(appointments);
    return res.json(appointments);
  }
});

router.post("/appointment", async function (req, res) {
  if (req.isAuthenticated()) {
    const { date, time, username, message } = req.body;
    const newAppointment = new Appointment({
      date,
      time,
      username,
    });
    const mailoptions = [username,"acesbarbershopappointment@gmail.com"];
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
      to: mailoptions, 
      subject: "Ace's Barbershop Appointment Confirmation",
      text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        console.log(username);
      }
    });
    res.status(200).json({ message: "Appointment created" });
  } else {
    res.status(504).json({ message: "Email not sent" });
  }
});

module.exports = router;

//An appointment has been scheduled for [user.firstname user.lastname]. The appointment is scheduled for  [DATE] at [TIME]. To contact the customer, please call [PHONE]. Thank you.
