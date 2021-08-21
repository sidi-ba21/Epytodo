const user = require("../../routes/users.js")

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