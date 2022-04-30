const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
//const passhash = require("../js/passwordHash");
const user = require("../model/user");

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

router.post("/signup", async (req, res) => {
  const User = await new user({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(req.body.email);
  console.log(req.body.password);
  try {
    const saved = await User.save();
  } catch (err) {
    res.status(400).send(err);
  }
  const { error } = validation(User);
  if (error) return res.status(400).send("Email already exist");
});

router.post("/barbers", async (req, res) => {
  res.render("barbers");
});

router.post("/appointments", async (req, res) => {
  res.render("appointments");
});

router.post("/services", async (req, res) => {
  res.render("services");
});

router.post("/about", async (req, res) => {
  res.render("about");
});

module.exports = router;
