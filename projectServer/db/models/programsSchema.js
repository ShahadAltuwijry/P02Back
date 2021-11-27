const mongoose = require("mongoose");

const programsSchema = new mongoose.Schema({
  //programs are the ones with flight booking
  name: { type: String, required: true },
  img: { type: String, required: true }, //upload from firebase as link
  description: { type: String, required: true },
  origLink: { type: String, required: true }, //flight link
  banner: { type: String, required: true }, //upload from firebase as link
  city: { type: String, required: true },
});

module.exports = mongoose.model("Programs", programsSchema);
