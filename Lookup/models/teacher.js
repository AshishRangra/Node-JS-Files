const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course_data",
  },
});
const teacher_data23 = mongoose.model("teacher_data", teacherSchema);
module.exports = teacher_data23;
