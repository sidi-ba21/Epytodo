module.exports = app => {
    const user = require("./user.js");
  
    // Create a new Customer
    app.post("/register", user.create);
};