const express = require("express");
const router = express.Router();
const async = require("hbs/lib/async");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);
const hash = require("../Authentication/passwordHash");

var bodyParser = require("body-parser");
var jsonparser = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({ extended: false });
const { user, validation } = require("../model/user");

router.get("/", async (req, res) => {
  res.render("home");
  //200
});

router.get("/home", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.post("/signup", urlencodedparser, async (req, res) => {
  req.body.password = await hash(req.body.password);
  const { error } = validation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let newUser = user.findOne({ email: req.body.email });
  if (newUser) {
    return res.status(400).send("Email already exisits!");
  } else {
    newUser = await new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const saved = await newUser.save();
      console.log("User saved");
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.get("/barbers", async (req, res) => {
  res.render("barbers");
});

router.get("/appointments", async (req, res) => {
  res.render("appointments");
});

router.get("/services", async (req, res) => {
  res.render("services");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

module.exports = router;
