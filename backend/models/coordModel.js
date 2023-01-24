const mongoose = require("mongoose");

const coodSchema = mongoose.Schema({
  longitude: {
    type: Number,
    required: [true, "Please add number of pages"],
  },
  latitude: {
    type: String,
    required: [true, "Please add your discipline"],
  },
  name: {
    type: Number,
    required: [true, "Please add your deadline"],
  },
});

module.exports = mongoose.model("Coordinate", coodSchema);
