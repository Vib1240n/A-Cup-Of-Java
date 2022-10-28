// Here we are acquiring the MongoDB(Database)
const mongoose = require("mongoose");

// below is the DDL(Data Definition Language) of MongoDB in which
// we create a schema named as 'user' using the mongoose.Schema() method.
//  The schema collects the username,password,firstname,lastname,date fields sent from the request.
const user = new mongoose.Schema({
  // The data type of username field is String and it is set to be required 
  //  i.e user can't leave username field empty
  username: {
    type: String,
    required: true,
  },
   // The data type of password field is String and it is set to be required 
  // i.e  user can't leave password field empty
  password: {
    type: String,
    required: true,
  },
  
   // The data type of firstname field is String and it is set to be required
  // i.e  user can't leave firstname field empty
  firstName: {
    type: String,
    required: true,
  },
  
   // The data type of lastname field is String and it is set to be required
  // i.e  user can't leave lastname field empty
  lastName: {
    type: String,
    required: true,
  },
  
   // The data type of date field is Date  and by default it is set as a current date
  // mentioned by Date.now 
  date: {
    type: Date,
    default: Date.now,
  },
});

// Then we export the schema using the last line.
// The export statement is used in Javascript modules to export functions, objects,
//  or primitive values from one module so that they can be used in other
//  programs (using the 'import' statement).
// below we are also providing our schema name that is 'user' which mean we are explicitly 
// telling javascript to export our 'user' model.
module.exports = mongoose.model("user", user, "users");