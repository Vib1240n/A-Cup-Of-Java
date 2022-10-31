const express = require("express");
const router = express.Router();
const passport = require("../Authentication/passportConfig");
const dotenv = require("dotenv");
dotenv.config({path: "../app/Private/.env"});
const nodemailer = require("nodemailer");
const User = require("../model/user");

//const user = require("../model/user");
const Appointment = require("../model/appointment");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    if (req.user) {
        //implementing status codes: 200, 201, 302, 400, 404, 500, 504
        var redir = {redirect: "/MyProfile"};
        return res.json(redir);
    } else {
        var redir = {redirect: "/home"};
        return res.json(redir);
    }
});

router.post("/signup", passport.authenticate("local-signup"), (req, res) => {
    if (req.user) {
        var redir = {redirect: "/MyProfile"};
        return res.json(redir);
    } else {
        var redir = {redirect: "/home"};
        return res.status(400).json(redir);
    }
});

router.get("/profile", function (req, res) {
    if (req.isAuthenticated()) {
        return res.status(200).json(req.user);
    } else {
        return res.status(302).json({message: "User not found"});
    }
});

router.post("/logout", function (req, res, next) {
    if (req.isAuthenticated()) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            return res.status(200).json({message: "Logged out"});
        });
    }
});

router.post("/appointment", async function (req, res) {
    if (req.isAuthenticated()) {
        const {date, time, username, message} = req.body;
        const newAppointment = new Appointment({
            date,
            time,
            username,
            phoneNumber,
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
            to: username && "",
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
        res.status(200).json({message: "Appointment created"});
    } else {
        res.status(504).json({message: "Email not sent"});
    }
});

module.exports = router;

//An appointment has been scheduled for [user.firstname user.lastname]. The appointment is scheduled for  [DATE] at [TIME]. To contact the customer, please call [PHONE]. Thank you.z
