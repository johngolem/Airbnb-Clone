const express = require("express");
const router = express.Router();

const { getOrders, postOrder } = require("../controller/orderController");

router.route("/").get(getOrders).post(postOrder);

module.exports = router;
