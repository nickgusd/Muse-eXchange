const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
  // author: String,
  type: String,
  sessionType: String,
  title: String,
  // link: String,
  // description: String,
  price: Number
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
