const mongoose = require("mongoose");
//const Joi = require("joi");

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


<<<<<<< HEAD
module.exports = mongoose.model("user", user);

=======
//exports.user = user;
//exports.validation = validation;
module.exports = mongoose.model("user", user, "users");
// module.exports = validation;
>>>>>>> main_temp
