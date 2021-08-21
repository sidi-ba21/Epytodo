module.exports = app => {
    const user = require("../src/model/user.controller.js");
  
    // Create a new Customer
    app.post("/user", user.create);
};