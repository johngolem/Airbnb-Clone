const express = require("express");
const router = express.Router();

const { postOrders, getOrders } = require("../controller/orderController");

router.get("/", getOrders);

router.post("/", postOrders);

module.exports = router;
