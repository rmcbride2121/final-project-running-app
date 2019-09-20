// require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import bodyParser from "body-parser";

// import mongoose from "mongoose";

// const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
app.use(express.static("public"));

// let mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/checkpoint2",
//   { useNewUrlParser: true }
// );
// app.use("/users", userRoutes);

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
