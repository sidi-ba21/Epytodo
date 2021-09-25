const mysql = require("mysql");
require('dotenv').config();

// Create a connection to the database
const connection = module.exports.connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// open the MySQL connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database.");
});

const error = module.exports.error = function(res) {
  res.type('application/json')
  res.status(500)
  res.send(JSON.stringify({msg: "internal server error"}, null, 2))
}