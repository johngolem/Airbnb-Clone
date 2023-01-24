const Cood = require("../models/coordModel");
const expressAsyncHandler = require("express-async-handler");

const postCood = expressAsyncHandler(async (req, res) => {
  const cood = new Cood({
    latitude: 24,
    longitude: "English",
    name: 56,
  });
  try {
    const savedCood = await cood.save().then((savedOrder) => {
      res.json(savedOrder);
    });
  } catch (err) {
    res.status(400).send("error posting the order");
  }
});

const getCood = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.find();
    res.json(order);
  } catch (err) {
    res.json(err);
  }
});

const getSingleCood = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Orders.findById(req.params.postID);
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

const deleteCood = expressAsyncHandler(async (req, res) => {
  try {
    const removedPost = await Orders.deleteOne({ _id: req.params.postID });
    res.json({ message: removedPost });
    res.send(`Post with ${_id} has been succesfully removed`);
  } catch (err) {
    res.send("error deleting the post");
  }
});

const updateCood = expressAsyncHandler(async (req, res) => {
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
  getCood,
  postCood,
  getSingleCood,
  deleteCood,
  updateCood,
};
