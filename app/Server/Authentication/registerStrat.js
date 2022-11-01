const User = require("../model/user");
const hash = require("../Authentication/passwordHash");         
const Strategy = require("passport-local").Strategy;

const registerStrat = new Strategy(                           //register strat is used to make sure the email is not in the database.
  { passReqToCallback: true, usernameField: "username" },    
  function (req, username, password, done) {
    User.findOne({ username })
      .lean()
      .exec(async (err, user) => {
        if (err) {
          return done(err, null);
        }

        if (!user) {
          const encryptedPassword = await hash(password);
          const { firstName, lastName } = req.body;

          let newUser = new User({
            username: req.body.username,
            password: encryptedPassword,
            firstName,
            lastName,
          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
        if (user) {
          return done("User already exist. Please login!", null);
        }
      });
  }
);

module.exports = registerStrat;

//  { usernameField: "username", passwordField: "password" },
//   async (req, username, password, done) => {
//     if (User.findOne({ username: username })) {
//       return done(null, false, { message: "Username already exists" });
//     } else {
//       const hashedPassword = await hash(password);
//       const user = new User({
//         username: username,
//         password: hashedPassword,
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//       });
//       user.save((err, inserted) => {
//         if (err) {
//           console.log(err);
//           return done(err, null, { message: "Error saving user" });
//         }
//         return done(null, inserted);
//       });
//     }
//   }
