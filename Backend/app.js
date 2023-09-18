require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Mongoose = require("mongoose");
const authRoute = require("./routes/auth");
Mongoose.connect(process.env.URISTRING).then(() => {
  app.use("/auth", authRoute);

  app.listen(5000 || process.env.PORT, () => {
    console.log("Server listening ...");
  });
});
