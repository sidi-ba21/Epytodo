const user = require("../../routes/user/users.js")

exports.create = (req, res) => {
    if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a user
  const user = new user({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    firstname: req.body.firstname,
    created_ad: req.body.created_ad
  });

  // Save user in the database
  user.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  user.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};