const registring = require('../../middleware/register')
const jwt = require('jsonwebtoken')

const register = module.exports.register = function (app) {
    app.post('/register', registring.check_register, registring.if_exist, registring.regis_user, (req, res) => {
        var token = jwt.sign(req.body.email, process.env.SECRET)
        res.type('application/json')
        res.set('token', token)
        res.send(JSON.stringify({token: token}, null, 2));
    })
}