const express = require("express");
const MongoStore = require("connect-mongo");
const indexRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("./Authentication/passportConfig");
const session = require("express-session");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "../app/Private/.env" });
let port = process.env.PORT;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://18.232.184.203",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    store: MongoStore.create({ mongoUrl: process.env.ADMIN_URI }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Database connection process
mongoose
  .connect(process.env.ADMIN_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch(console.error);

//Route creation
app.use("/api", indexRouter);

app.listen(port, () => console.log("Server connected and running: " + port));
