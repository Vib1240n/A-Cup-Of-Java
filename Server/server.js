const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
var bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path:"./Private/.env"});

//Create route
const indexRouter = require("../Server/routes/index");
app.use("/", indexRouter);

//Static files
app.use(express.static("/Public/Assets"));
app.use("/css", express.static(__dirname + "./Public/Assets/css"));
app.use("/images", express.static(__dirname + "./Public/Assets/images"));

//Templates
app.set("views", __dirname + "./Public/views");
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

app.use(bodyparser.urlencoded({ extended: false }));
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
app.listen(process.env.PORT);
