var express = require('express');
//const Auth = require('../models/auth');
var data = require('../models/sql')
var router = express.Router();
var CheckLogin = require('../models/login_checker_forindex')

router.get('/', function (req, res) {
    var checklogin = CheckLogin(req, res)
    if (checklogin == false) {
        res.render('index', { login: false });
    } else {
        var id = req.signedCookies.UUID
        data.findOne({ '_id': id }).exec((err, user) => {
            var cuser = user.user
            res.render("index", { login: true, userdata: cuser, rmoney: user.rmoney })
        })
    }
})

module.exports = router