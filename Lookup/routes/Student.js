const express = require("express");
const studentData = require("../models/student");
const teacherData = require("../models/teacher");
const mongoose = require("mongoose");
const routes = express.Router();
routes.post("/student", async (req, res) => {
  const { student_name, teacher } = req.body;
  const data = await new studentData({
    student_name: student_name,
    teacher: teacher,
  }).save();
  res.send({
    status: 200,
    message: "student added successfully",
    data: data,
  });
});

routes.get("/getStudentData/:id", async (req, res) => {
  const id = req.params.id;

  // const data = await studentData.findById(id);
  // if (!data) {
  //   return res.status(500).json("Student Not Exist");
  // }

  // res.status(200).json(data);

  try {
    const user = await studentData.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "teacher_datas",
          localField: "teacher",
          foreignField: "_id",
          as: "teacher",
        },
      },
      { $unwind: "$teacher" },
      {
        $lookup: {
          from: "course_datas",
          localField: "teacher.course",
          foreignField: "_id",
          as: "teacher.course",
        },
      },
      { $unwind: "$teacher.course" },
    ]);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: err });
  }
});
module.exports = routes;
