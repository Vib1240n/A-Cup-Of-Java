const express = require("express");
const router = express.Router();
const user = require("../model/user");

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/home", async (req, res) => {
    res.render("home")
})
router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/barbers", async (req, res) =>{
  res.render("barbers")
})


module.exports = router;
