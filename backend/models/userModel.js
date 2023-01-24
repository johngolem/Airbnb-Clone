const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add number of pages"],
  },
  lastName: {
    type: String,
    required: [true, "Please add your discipline"],
  },
});

module.exports = mongoose.model("User", userSchema);
