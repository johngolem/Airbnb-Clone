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

const getSingleOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.findById(req.params.postID);
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

const deleteOrder = expressAsyncHandler(async (req, res) => {
  try {
    const removedPost = await Orders.deleteOne({ _id: req.params.postID });
    res.json({ message: removedPost });
    res.send(`Post with ${_id} has been succesfully removed`);
  } catch (err) {
    res.send("error deleting the post");
  }
});

const updateOrder = expressAsyncHandler(async (req, res) => {
  try {
    const updatedOrder = await Orders.updateOne(
      { _id: req.params.postID },
      { $set: { discipline: req.body.discipline } }
    );

    res.json({ updatedOrder });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = {
  getOrders,
  postOrders,
  getSingleOrder,
  deleteOrder,
  updateOrder,
};
