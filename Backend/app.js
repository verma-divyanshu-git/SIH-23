require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Mongoose = require("mongoose");
const cors = require('cors');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use(
  cors({
    origin: ["http://localhost:3000","http://127.0.0.1:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
const authRoute = require("./routes/auth");
Mongoose.connect(process.env.URISTRING).then(() => {
  app.use("/auth", authRoute);


  app.listen(5000 || process.env.PORT, () => {
    console.log("Server listening ...");
  });
});
