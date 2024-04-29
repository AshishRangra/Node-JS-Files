const express = require("express");
const course_data = require("../models/course");
const routes = express.Router();
routes.post("/course", async (req, res) => {
  const { course_name } = req.body;
  const data = await new course_data({
    course_name: course_name,
  }).save();
  res.status(200).json(data);
});
module.exports = routes;
