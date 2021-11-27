const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, trim: true, required: true, unique: true },
  email: { type: String, trim: true, unique: true },
  password: { type: String, trim: true, required: true },
  visits: [
    { type: mongoose.Schema.Types.ObjectId, ref: "spots" },
    { type: mongoose.Schema.Types.ObjectId, ref: "packages" },
  ], //child from packages&spots
});

module.exports = mongoose.model("User", userSchema);
