const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songSchema = new Schema({
  author: String,
  title: String,
  genre: String,
  file: String,
  price: Number
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
