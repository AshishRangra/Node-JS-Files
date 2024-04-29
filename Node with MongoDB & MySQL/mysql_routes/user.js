const express = require("express");
const { createUser, deleteUser } = require("../mysql_models/user");
const connection = require("../connection");
const routes = express.Router();

routes.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    await createUser(username, password);

    res.status(200).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
routes.delete("/remove/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await deleteUser(ID);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = routes;
