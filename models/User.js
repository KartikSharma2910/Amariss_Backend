const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
});

module.exports = mongoose.model("User", userSchema);
