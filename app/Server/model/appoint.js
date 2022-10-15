const mongoose = require("mongoose");

const appoint = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Appointments", appoint);
