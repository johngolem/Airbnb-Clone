const express = require("express");
const router = express.Router();

const {
  postOrders,
  getOrders,
  getSingleOrder,
  deleteOrder,
  updateOrder,
} = require("../controller/orderController");

router.get("/", getOrders);

router.post("/", postOrders);

// router.get("/postID", getSingleOrder);
router.get("/:postID", getSingleOrder);

router.delete("/:postID", deleteOrder);
router.patch("/:postID", updateOrder);

module.exports = router;
