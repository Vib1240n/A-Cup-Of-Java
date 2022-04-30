const express = require("express");
const router = express.Router();
//rsconst passhash = require("../js/passwordHash");
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
router.get("/signup", async (req, res) => {
  res.render("signup");
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
