const express = require("express");
const flash = require("express-flash");
const MongoStore = require("connect-mongo");
const app = express();
const cors = require("cors");
var bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("./Authentication/passportConfig");
const session = require("express-session");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "../app/Private/.env" });
let port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
// app.use(express.static("../client/build"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    store: MongoStore.create({ mongoUrl: process.env.ADMIN_URI }),
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000, httpOnly: true },
  })
);
// Middleware for passport
app.use(flash());
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
const indexRouter = require("./routes/index");
app.use("/api", indexRouter);

// app.get("*", (req, res) => {
//   res.sendFile(
//     require("path").join(__dirname, "..", "..", "client", "build", "index.html")
//   );
// });

app.listen(port, () => console.log("Server connected and running" + port));
