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

// function validation(user) {
//   const schema = {
//     name: Joi.string().min(4).max(255).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().min(8).max(2048).required(),
//   };
//   return Joi.validate(user, schema);
// }

//exports.user = user;
//exports.validation = validation;
module.exports = mongoose.model("user", user);
// module.exports = validation;
