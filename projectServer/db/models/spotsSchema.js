const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }, //upload from firebase as link
  description: { type: String, required: true },
  longDesc: { type: String },
  slides: { type: Array },
  mapLink: { type: String, required: true }, //link to sta page
  banner: { type: String, required: true }, //upload from firebase as link
  city: { type: String, required: true },
});

module.exports = mongoose.model("Spot", spotSchema);
