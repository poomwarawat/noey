const mysql = require("mysql");

const con = mysql.createConnection({
  host: "tbegin.crjp8zi4ulpc.ap-southeast-1.rds.amazonaws.com",
  user: "root",
  password: "12345678",
  database: "noey",
});

module.exports = con;
