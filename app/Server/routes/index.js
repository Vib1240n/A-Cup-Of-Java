const express = require("express");
const router = express.Router();
const passport = require("../Authentication/passportConfig");
const dotenv = require("dotenv");
dotenv.config({ path: "../app/Private/.env" });
const nodemailer = require("nodemailer");
const User = require("../model/user");
const hash = require("../Authentication/passwordHash");
const validator = require("node-email-validation");
const Appointment = require("../model/appointment");

//used to make sure email is an actual email and not jsut a random string
async function isEmailValid(email) {
  return emailValidator.validate(email);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "acesbarbershopappointment@gmail.com",
    pass: process.env.emailPassApp,
  },
});

//const user = require("../model/user");

router.post("/login", passport.authenticate("local"), (req, res) => {
  var time = new Date(Date.now());
  console.log(
    "Session ID before @ /login route: " +
      time.toLocaleTimeString() +
      ": " +
      req.sessionID
  );
  if (req.user) {
    console.log("Session ID after @ /login route: " + req.sessionID);
    console.log("User is logged in: " + req.user.username);
    console.log("User is Authenticated: " + req.isAuthenticated());
    res.status(200).json({ message: "Login successful" });
  } else {
    res.send(400).json({ message: "User not found" });
  }
});

router.post("/signup", function (req, res) {
  User.findOne({ username: req.body.username })
    .lean()
    .exec(async (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      if (user) {
        return res.status(400).json({ message: "User Already Exists" });
      }
      if (!validator.is_email_valid(req.body.username)) {
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
          passport.authenticate("local")(req, res, function () {
            return res.status(200).json(req.user);
          });
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

router.get("/profile", function (req, res) {
  var time = new Date(Date.now());
  console.log(
    "Session ID @ /profile route: " +
      time.toLocaleTimeString() +
      ": " +
      req.sessionID
  );
  if (req.isAuthenticated()) {
    console.log(req.isAuthenticated());
    console.log("user: " + req.user.username);
    return res.status(200).json(req.user);
    num = num + 1;
  } else {
    console.log("else Statement");
    return res.status(302).json({ message: "User not found" });
  }
});

router.get("/logout", function (req, res, next) {
  console.log("Session ID @ /logout route: " + req.sessionID);
  console.log("User is logged in: " + req.user.username);
  if (req.isAuthenticated()) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: "Logout successful" });
    });
  } else {
    res.status(400).json({ message: "User not logged in" });
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
  console.log("Session ID @ /appointment route: " + req.sessionID);
  if (req.isAuthenticated()) {
    const { date, time, username, message } = req.body;
    const newAppointment = new Appointment({
      date,
      time,
      username,
    });
    const mailoptions = [username, "acesbarbershopappointment@gmail.com"];
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

/**
 * {"_id":"QLr_S5cGhM89KENOrJxaJUreMN57DdLu","expires":{"$date":{"$numberLong":"1670546765520"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:46:05.520Z\",\"httpOnly\":true,\"path\":\"/\"}}"}
 *
 * {"_id":"_HmjXWuBcfKPIEensc4ELD7TJ0IBkdKv","expires":{"$date":{"$numberLong":"1670546765533"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:46:05.533Z\",\"httpOnly\":true,\"path\":\"/\"}}"}
 *
 * {"_id":"nxjIuF2r9MpVe_PsOYSJvAQlugOHZe_2","expires":{"$date":{"$numberLong":"1670546763415"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:46:03.415Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"username\":\"vibhorsgr@gmail.com\",\"firstname\":\"Vibhore\",\"lastname\":\"Sagar\"}}}"}
 *
 * {"_id":"PYbu8a3v7z1GGh-q9Vuj1rBfBDd1BztL","expires":{"$date":{"$numberLong":"1670547165265"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:52:45.265Z\",\"httpOnly\":true,\"path\":\"/\"}}"}
 *
 * {"_id":"w05PAzXGQVISnodx9q3yAw9mZb6nJQ4h","expires":{"$date":{"$numberLong":"1670547167836"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:52:47.836Z\",\"httpOnly\":true,\"path\":\"/\"}}"}
 *
 * {"_id":"4FPp-H113r-mh2wBsRujDLjyJNKoBwKe","expires":{"$date":{"$numberLong":"1670547167950"}},"session":"{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2022-12-09T00:52:47.950Z\",\"httpOnly\":true,\"path\":\"/\"}}"}
 */
