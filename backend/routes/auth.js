const express = require("express");
const router = express.Router();

router.route.status(200).get("/login", (req, res) => {});




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