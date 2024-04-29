const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
mongoose
  .connect("mongodb://127.0.0.1:27017/crud2", {})
  .then(() => {
    console.log("Connected to MongoDB.......");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use(express.json());
const route1 = require("./routes/Student");
const route2 = require("./routes/teacher");
const route3 = require("./routes/course");
app.use(route1);
app.use(route2);
app.use(route3);
app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}......`)
});






// // // const express = require("express");
// // // const app = express();
// // // const PORT = 5500;
// // var http = require("http");
// // var fs = require("fs");
// // // http
// // //   .createServer(function (req, res) {
// // //     fs.readFile("test.txt", function (err, data) {
// // //       //   res.writeHead(200, { "Content-Type": "text/html" });
// // //       //   res.write(data);
// // //       //   return res.end();

// // fs.appendFile("mynewfile2.txt", "Hello content!", function (err) {
// //   if (err) throw err;
// //   console.log("Saved!");
// // });
// // //     });
// // //   })
// // //   .listen(8080);

// // console.log(45678);

// // // app.get("/get", function (req, res) {
// // //   res.send("Hello World");
// // // });

// // // console.error('sdfv')

// // // app.listen(PORT);
// // // console.log(`PORT is running o n ${PORT}`);

// // Include os module and create its object
// const os = require('os');

// // return the cpu architecture
// console.log("CPU architecture: " + os.arch());

// // It returns the amount of free system memory in bytes
// console.log("Free memory: " + os.freemem());

// // It return total amount of system memory in bytes
// console.log("Total memory: " + os.totalmem());

// // It returns the list of network interfaces
// console.log('List of network Interfaces: ' + os.networkInterfaces());

// // It returns the operating systems default directory for temp files.
// console.log('OS default directory for temp files : ' + os.tmpdir());
