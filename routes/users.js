const sql = require("../src/config/db.js");

// constructor
const user = function(user) {
  this.id = user.id,
  this.email = user.email,
  this.active = user.user_password,
  this.name = user.name,
  this.firstname = user.firstname,
  this.created_at = user.created_at
};

user.create = (newuser, result) => {
  sql.query("INSERT INTO users SET ?", newuser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newuser });
    result(null, { id: res.insertId, ...newuser });
  });
};

const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};