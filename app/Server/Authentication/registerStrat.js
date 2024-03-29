const User = require("../model/user");
const hash = require("../Authentication/passwordHash");         
const Strategy = require("passport-local").Strategy;
const emailValidator = require('deep-email-validator');
const nodemailer = require("nodemailer");

//used to make sure email is an actual email and not jsut a random string
async function isEmailValid(email) {
  return emailValidator.validate(email)
}

const registerStrat = new Strategy(                           //register strat is used to make sure the email is not in the database.
  { passReqToCallback: true, usernameField: "username" },    
  function (req, username, password, done) {
    User.findOne({ username })
      .lean()
      .exec(async (err, user) => {
        if (err) {
          return done(err, null);
        }
        const {valid, reason, validators} = await isEmailValid(username);
        if(!valid){
          console.log(reason);
          console.log(validators);
          return done(err, null);
        }
        if (!user) {
          const encryptedPassword = await hash(password);
          const { firstName, lastName, phoneNumber} = req.body;

          let newUser = new User({
            username: req.body.username,
            password: encryptedPassword,
            firstName,
            lastName,
            phoneNumber,
          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }
            let message = `Hello ${firstName} ${lastName}. Thank you for signing up with Ace's Barbershop We are located at 1049 Jefferson Blvd West Sacramento, CA 95691. For any questions please contact us at (916) 956-0670. We look forward to seeing you!`;

            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                  user: "acesbarbershopappointment@gmail.com",
                  pass: process.env.emailPassApp,
              },
            });
            const mailOptions = {
              from: "acesbarbershopappointment@gmail.com",
              to: username,
              subject: "Ace's Barbershop Account Confirmation",
              text: message,
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                  console.log(error);
              } else {
                  console.log("Email sent: " + info.response);
              }
            });
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