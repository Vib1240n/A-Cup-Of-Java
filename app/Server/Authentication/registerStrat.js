const User = require("../model/user");
const hash = require("../Authentication/passwordHash");
const Strategy = require("passport-local").Strategy;
const emailValidator = require("deep-email-validator");
const nodemailer = require("nodemailer");

//used to make sure email is an actual email and not jsut a random string
async function isEmailValid(email) {
  return emailValidator.validate(email);
}

const registerStrat = new Strategy(
  { passReqToCallback: true},
  function (req, username, password, done) {
    User.findOne({ username })
      .lean()
      .exec(async (err, user) => {
        if (err) {
          return done(null, false, { errorCode: 500, message: err });
        }
        // const { valid, reason, validators } = await isEmailValid(username);
        // if (!valid) {
        //   console.log(reason);
        //   console.log(validators);
        //   return done(null, false, { errorCode: 400 });
        // }
        if (!user) {
          const encryptedPassword = await hash(password);
          const { firstName, lastName, phoneNumber } = req.body;

          let newUser = new User({
            username: username,
            password: encryptedPassword,
            firstName,
            lastName,
            phoneNumber,
          });

          newUser.save((error) => {
            if (error) {
              console.log(error);
              return done(error, null, {
                errorCode: 401,
                message: "Cant save user",
              });
            }
            // let message = `Hello ${firstName} ${lastName}. Thank you for signing up with Ace's Barbershop.\n We are located at 1049 Jefferson Blvd West Sacramento, CA 95691.\n\n For any questions please contact us at (916) 956-0670. We look forward to seeing you!`;

            // const transporter = nodemailer.createTransport({
            //   service: "gmail",
            //   auth: {
            //     user: "acesbarbershopappointment@gmail.com",
            //     pass: process.env.emailPassApp,
            //   },
            // });
            // const mailOptions = {
            //   from: "acesbarbershopappointment@gmail.com",
            //   to: username,
            //   subject: "Welcome To Ace's Barbershop!",
            //   text: message,
            // };
            // transporter.sendMail(mailOptions, function (error, info) {
            //   if (error) {
            //     console.log(error);
            //     done(error, null);
            //   } else {
            //     console.log("Email sent: " + info.response);
            //   }
            // });
            return done(null, true, {
              errorCode: 200,
              message: "User created",
            });
          });
        }
        if (user) {
          return done(null, false, { errorCode: 400, message: "User exists" });
        }
      });
  }
);

module.exports = registerStrat;
