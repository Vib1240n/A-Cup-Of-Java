const mongoose = require("mongoose");

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
    phoneNumber: {
        type: String,
        required: true,
        },
});


module.exports = mongoose.model("user", user, "users");