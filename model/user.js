const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var user = Schema({
  name: {
    type: String,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 2048,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", user);
