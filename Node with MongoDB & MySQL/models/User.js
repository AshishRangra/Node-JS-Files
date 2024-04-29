const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});
const UserData = mongoose.model("User", userSchema);
module.exports = UserData;
