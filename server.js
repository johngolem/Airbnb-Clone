const express = require("express");
const { config } = require("dotenv");
const dotenv = require("dotenv").config();
const connectDB = require("./backend/config/db");
const colors = require("colors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { urlencoded } = require("express");

connectDB();

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

const users = [];

console.log(`here is the ${process.env.MONGO_URI}`);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Unemployed Geeks");
});

app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/login", (req, res) => {
  // authenticate user
  res.send("waiting for authentication logic");
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(200).send(user);
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {});

app.listen(5004, () => {
  console.log("Express server succesfuly started, listening to port 5004");
});
