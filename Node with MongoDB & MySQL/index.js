const express = require("express");
const app = express();
app.use(express.json());
var connection = require("./connection");
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL successfully");
  }
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mysql&mongo")
  .then(() => console.log("Connected Successfully........."))
  .catch(() => console.log("Error in connection....."));

const route1 = require("./routes/User");
const route2 = require("./mysql_routes/user");
app.use("/mysql", route2);
app.use("/mongo", route1);

app.listen(5000, () => console.log("Server is running on port 5000"));
