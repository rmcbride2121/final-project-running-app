const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  distGoal: Number,
  progress: Number,
  dateComplete: Date
});

let User = mongoose.model("User", userSchema);

module.exports = User;
