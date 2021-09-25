const db = require('../config/db')
const jwt = require('jsonwebtoken')
const crypt = require('bcryptjs')

const check_login = module.exports.check_login = function (req, res, next) {
    if (req.body.email == undefined || req.body.password == undefined)
        db.error(res)
    else next()
}

const check_token = module.exports.check_token = function (req, res, next) {
    if (req.header('token') != undefined) {
        var token = req.header('token')
        try {
            var jtok = jwt.verify(token, process.env.SECRET);
        } 
        catch(err) {
            res.type('application/json')
            res.send(JSON.stringify({msg: "Token is not valid"}, null, 2))
        }
        if (jtok != undefined) next()
    }
    else {
        res.type('application/json')
        res.send(JSON.stringify({msg: "No token, authorization denied"}, null, 2))
    }
}

const check_credentials = module.exports.check_credentials = function (req, res, next) {
    try {
        var sql = `SELECT * FROM user WHERE email="${req.body.email}"`
    } catch (e) {
        db.error(res);
    }
    db.connection.query(sql, function (err, quered) {
        if (err) db.error(res);
        if (quered.length > 0) {
            var user = quered[0];
            crypt.compare(req.body.password, user.password).then(function(result) {
                if (result) next()
                else {
                    res.type('application/json')
                    res.send(JSON.stringify({msg: "Invalid Credentials"}, null, 2))
                }
            })
        }
        else {
            res.type('application/json')
            res.send(JSON.stringify({msg: "Invalid Credentials"}, null, 2))
        }
    });
}