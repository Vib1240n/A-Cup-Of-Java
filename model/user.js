const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
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

module.export = mongoose.model("user", userSchema);
