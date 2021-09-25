const authLogin = require('../../middleware/auth')
const jwt = require('jsonwebtoken')

const login = module.exports.login = function (app) {
    app.post('/login', authLogin.check_login, authLogin.check_credentials, (req, res) => {
        var token = jwt.sign(req.body.email, process.env.SECRET)
        res.type('application/json')
        res.set('token', token)
        res.send(JSON.stringify({token: token}, null, 2));
    })
}