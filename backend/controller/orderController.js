const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

const postOrder = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add the order details");
  }

  const order = await Order.create({
    pages: req.body.pages,
    discipline: req.body.discipline,
    deadline: req.body.deadline,
    orderDetails: req.body.orderDetails, 
  });
  res.status(200).json({ order });
});

module.exports = { getOrders, postOrder };
