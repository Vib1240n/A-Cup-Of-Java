// Here we are acquiring the MongoDB(Database)
const mongoose = require("mongoose");

// below is the DDL(Data Definition Language) of MongoDB in which
// we create a schema named as 'user' using the mongoose.Schema() method.
//  The schema collects the username,password,firstname,lastname,date fields sent from the request.
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