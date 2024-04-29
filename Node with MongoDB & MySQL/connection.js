const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "nodeJS",
    port: "3306",
  });
  
  
  module.exports=connection;