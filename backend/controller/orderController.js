const Orders = require("../models/orderModel");
const expressAsyncHandler = require("express-async-handler");

const postOrders = expressAsyncHandler(async (req, res) => {
  const order = new Orders({
    pages: 24,
    discipline: "English",
    deadline: 56,
    orderDetails: "Come get served",
  });
  try {
    const savedOrder = await order.save().then((savedOrder) => {
      res.json(savedOrder);
    });
  } catch (err) {
    res.status(400).send("error posting the order");
  }
});

const getOrders = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.find();
    res.json(order);
  } catch (err) {
    res.json(err);
  }
});

module.exports = { getOrders, postOrders };
