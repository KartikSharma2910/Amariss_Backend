const mongoose = require("mongoose");
const moment = require("moment-timezone");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
  createdAt: {
    type: String,
    default: () => moment().tz("Asia/Kolkata").format("MMMM D, YYYY h:mm A"),
  },
});

module.exports = mongoose.model("User", userSchema);
