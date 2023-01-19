const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  pages: {
    type: Number,
    required: [true, "Please add number of pages"],
  },
  discipline: {
    type: String,
    required: [true, "Please add your discipline"],
  },
  deadline: {
    type: Number,
    required: [true, "Please add your deadline"],
  },
  orderDetails: {
    type: String,
    required: [true, "Please add your order details"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
