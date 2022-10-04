const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const cors = require("cors");
var bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "../app/Private/.env" });
let port = process.env.PORT;

app.use(cors());
app.use(express.static("../client/build"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Database connection process
mongoose
  .connect(process.env.ADMIN_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch(console.error);

//Port to listen to
app.listen(process.env.PORT, () => console.log("Server connected and running"));

// Express-session
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Route creation
const indexRouter = require("./routes/index");
app.use("/api", indexRouter);

app.get("*", (req, res) => {
  res.sendFile(
    require("path").join(__dirname, "..", "..", "client", "build", "index.html")
  );
});
// Middleware for passport
app.use(passport.initialize());
app.use(passport.session());
require("./Authentication/passport")(passport);
