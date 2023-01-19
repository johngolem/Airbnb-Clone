const express = require("express");
const app = express();
const { config } = require("dotenv");
const dotenv = require("dotenv").config();
const connectDB = require("./backend/config/db");
const colors = require("colors");
const bodyParser = require("body-parser");

const listing = require("./backend/routes/review");
const orders = require("./backend/routes/order");

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { urlencoded } = require("express");

app.use(bodyParser.json());

connectDB();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/api/orders", orders);
app.use("/api/listing", listing);

console.log(`here is the ${process.env.MONGO_URI}`);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Unemployed Geeks");
});

app.listen(5004, () => {
  console.log("Express server succesfuly started, listening to port 5004");
});
