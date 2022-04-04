const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
const salt = await bcrypt.genSalt(10);

router.post("/SignUpPage.html", async (req, res) => {
  const body = req.body;
  const user = new User(body);
  user.password = await bcrypt.hash(user.password, salt);
  user.save().then((doc) => res.status(201).send(doc));
});

module.exports = router;