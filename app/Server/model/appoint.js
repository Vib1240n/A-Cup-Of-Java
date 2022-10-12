const mongoose = require("mongoose");

const appoint = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("appoint", appoint);
