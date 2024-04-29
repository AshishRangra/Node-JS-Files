const express = require("express");
const teacher_data = require("../models/teacher");
const routes = express.Router();
const mongoose = require("mongoose");
routes.post("/teacher", async (req, res) => {
  const { teacher_name, course } = req.body;
  const data = await new teacher_data({
    teacher_name: teacher_name,
    course: course,
  }).save();
  res.status(200).json(data);
});
routes.get("/getTeacherData/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const teacherData = await teacher_data.aggregate([
      {
        $match: { _id:  new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: "course_datas",
          localField: "course",
          foreignField: "_id",
          as: "course",
        },
      },
      { $unwind: "$course" },
    ]);
    res.status(200).json(teacherData);
  } catch (error) {
    console.log(error);
  }
});
module.exports = routes;
