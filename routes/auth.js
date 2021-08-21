var express = require('express');
var user = express.Router();
var dotenv = require('dotenv').config();
var jwt = require('jsonwebtoken');
const sql = require('../src/config/db.js');
var bcrypt = require('bcryptjs');
var auth = require('../src/middleware/auth.js');

express.json();

user.post('/register', function(req, result) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    sql.query("INSERT INTO user SET ?", req.body, function(err, res) {
        if (err) {
            if (err.errno == 1062) {
                console.log("Already Exists");
                result.status(400).send({
                    msg: "bad request"
                });
            }
        } else {
            const token = auth.generateToken(req.body.email, res.id);
            console.log("Registered.");
            console.log(req.body);
            result.status(201).send({
                token: token
            });
        }
    });
});

user.post('/login', (req, res) => {
    sql.query("SELECT * FROM user WHERE email=?", req.body.email, function(err, result) {
              if (err || result[0] == undefined) {
            console.log("Invalid Credentials for Login");
            res.status(401).send({
                msg: "401 Unauthorized"
            });
        } else if (bcrypt.compareSync(req.body.password, result[0].password)) {
            const token = auth.generateToken(req.body.email, result[0].id);
            console.log("Logged in.");
            res.status(200).send({
                token: token
            });
        } else {
            console.log("Invalid Credentials for Login");
            res.status(401).send({
                msg: "401 Unauthorized"
            });
        }
             });
});

module.exports = user;
