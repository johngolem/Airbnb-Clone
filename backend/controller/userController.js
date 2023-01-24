const Users = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// const createNewUsers = async (req, res) => {
//   const { user, pwd } = req.body;
//   if (!user || !pwd)
//     return res
//       .status(400)
//       .json({ message: "Username and password are required" });
//   const duplicate = await User.findOne({ username: user }).exec();
//   if (duplicate) return res.sendStatus(409);
//   try {
//     //encrypt the pass
//     const hashedPwd = await bcrypt.hash(pwd, 10);
//     //create and store the new user
//     const result = await User.create({
//       username: user,
//       password: hashedPwd,
//     });
//     res.status(201).json({
//       message: `success user ${user} created
//     !`,
//     });
//   } catch {}
// };

const createUser = expressAsyncHandler(async (req, res) => {
  const user = new Users({
    firstName: "John",
    lastName: "Paul",
  });
  try {
    const savedUser = await user.save().then((savedUser) => {
      res.json(savedUser);
    });
  } catch (err) {
    res.status(400).send("error creating the user");
  }
});

const getUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await Users.find().limit(5);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = { createUser, getUsers };
