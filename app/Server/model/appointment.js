// Here we are acquiring the MongoDB(Database)
const mongoose = require("mongoose");


// below is the DDL(Data Definition Language) of MongoDB in which
// we create a schema named as 'appointment' using the mongoose.Schema() method.
//  The schema collects the date,time,username fields sent from the request.

const appointment = new mongoose.Schema({
  // The data type of date field is Date and it is set to be required
   // i.e  user can't leave date field empty
    date: {
        type: Date,
        required: true,
    },

    //Defing the the time field in database and the data type of time field is String 
    time: {
        type: String,
    },
    // The data type of username field is String and it is set to be required 
  //  i.e user can't leave username field empty
    username: {
        type: String,
        required: true,
    },

});


// Then we export the schema using the last line.
// The export statement is used in Javascript modules to export functions, objects,
//  or primitive values from one module so that they can be used in other
//  programs (using the 'import' statement).
// below we are also providing our schema name that is 'appointment' which mean we are 
// explicitly telling javascript to export our 'appointment' model.
module.exports = mongoose.model("appointment", appointment, "Appointments");