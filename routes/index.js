const express = require("express");
const router = express.Router();
const async = require("hbs/lib/async");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);

var bodyParser = require("body-parser");
var jsonparser = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({ extended: false });
const user = require("../model/User");

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
router.get("/userprofile", async (req, res) => {
  res.render("userprofile");
});
module.exports = router;