const express = require("express");
const User = require("../models/User");
const routes = express.Router();
routes.post("/register", async (req, res) => {
  const { name, password } = req.body;
  try {
    const data = await new User({
      name,
      password,
    }).save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = routes;
