// ExpressJS is a NodeJS module; express is the name of the module
// So below line instantiates Express and assigns app variable to it.
const express = require("express");
const { session } = require("../Authentication/passportConfig");
// express.Router is used to create new router objects and to handle requests.
const router = express.Router();
const passport = require("../Authentication/passportConfig");

// here we are loading our mongoDB model whose name is user
const User = require("../model/user");

const {
  giveAuthentication,
  checkAuthentication,
} = require("../Authentication/Authentication");
const user = require("../model/user");

// here we are loading our mongoDB model whose name is appointment
const Appointment = require("../model/appointment");

// We are using router object(instantiated previously) to handle the request for login of user
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  // We keep the check that if user is valid and if it exists then redirect the user to
  // MyProfile page
  if (req.user) {
    var redir = { redirect: "/MyProfile" };
    return res.json(redir);
  }
  // And else if the user is not valid or even non existant then redirect to the home page
   else {
    var redir = { redirect: "/home" };
    return res.json(redir);
  }
});

// We are using router object to handle the request for signup the user
router.post("/signup", passport.authenticate("local-signup"), (req, res) => {
   // We keep the check here as well that if user is valid and if it exists and user request
  //  is for signup then redirect the user to MyProfile page
  if (req.user) {
    var redir = { redirect: "/MyProfile" };
    return res.json(redir);
  } 
   // And else if the user is not valid or even non existant then redirect to the home page
  else {
    var redir = { redirect: "/home" };
    return res.json(redir);
  }
});

// Here we are getting a user when a GET request is made to the profile page
router.get("/profile", checkAuthentication, function (req, res) {
  res.send(req.user);
});

// We are using router object to handle the request for logout of the user
router.post("/logout", function (req, res, next) {
  // Inside this logout request we perform error handling that if any error occurs 
  // during logout request then Express default error handler closes 
  // the connection and fails the request and return from this point.
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
     // Otherwise if no error occurs then then redirected to home page.
    var redir = { redirect: "/home" };
    return res.json(redir);
  });
});

// Here we are authenticating the date,time and username for the appointment request
router.post("/appointment", checkAuthentication, function(req, res, done) {
  const { date, time, username } = req.body;
  // here creating a temp newAppointment to store date,time,username 
  const newAppointment = new Appointment({
    date,
    time,
    username,
  });
  // Going to save the  date,time,username and inside save method we are checking 
  // that if any error occurs then show error,return from here and dont insert data into
  // appointment model
  newAppointment.save((error, inserted) => {
    if (error) {
      return done(error, null);
    }
// otherwise in case of zero error insert date,time and username in appointment model
    return done(null, inserted);
  });
  res.json(newAppointment);
});


// Here we are getting a Appointment when a GET request is made to the appointment page
router.get("/appointment", checkAuthentication, function(req, res, done) {
  res.send(req.Appointment);
});

//  in index.js, the module.exports=router is mapping a router and
//  all logic that's required to map /index (along with the right callbacks etc...)
module.exports = router;
