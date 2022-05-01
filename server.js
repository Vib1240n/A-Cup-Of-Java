const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

//Create route
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//static files
app.use(express.static("Assets"));
app.use("/css", express.static(__dirname + "Assets/css"))
app.use("/images", express.static(__dirname+ "Assets/images"))

//templates
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

//connect to database
mongoose
  .connect(
    process.env.ADMIN_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to database"))
  .catch(console.error);

app.listen(process.env.PORT);
