module.exports = app => {
    const user = require("./users.js");
    // Create a new Customer
    app.post("/register", user.create);
    // Retrieve all Customers
    app.get("/user", user.getAll);
}