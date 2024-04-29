const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher_data",
  },
});
const student_data = mongoose.model("student_data", studentSchema);
module.exports = student_data;
