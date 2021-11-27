const mongoose = require("mongoose");

const packagesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }, //upload from firebase as link
  description: { type: String, required: true },
  origLink: { type: String, required: true }, //link to sta page
  price: { type: Number, required: true },
  banner: { type: String, required: true }, //upload from firebase as link
  city: { type: String, required: true },
});

module.exports = mongoose.model("Packages", packagesSchema);
