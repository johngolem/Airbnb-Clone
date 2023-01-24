const express = require("express");
const router = express.Router();

const { postReview, getReview } = require("../controller/listingController");

// route to use is api/listing

router.route("/").get(getReview);
router.post("/post", postReview);



module.exports = router;
