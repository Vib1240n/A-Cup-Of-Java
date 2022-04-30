const express = require("express");
const router = express.Router();
const passhash = require("../js/passwordHash");
const user = require("../model/user");

router.post("/", async (req, res) => {
  res.render("home");
  //200
});

router.post("/home", async (req, res) => {
  res.render("home");
});
router.post("/login", async (req, res) => {
  res.render("login");
});

router.post("/signup", async (req, res) => {
  const User = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try{
    const saved = await User.save();
  }catch(err){
    res.status(400).send(err)
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
