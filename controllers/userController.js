const expressAsyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

const register = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all the details");
  }

  const userAvailable = await UserModel.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
});

const login = expressAsyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

const current = expressAsyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = {
  register,
  login,
  current
};
