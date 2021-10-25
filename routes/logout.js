var express = require('express');
//const Auth = require('../models/auth');
var data = require('../models/sql')
var router = express.Router();
var CheckLogin = require('../models/login_checker_forindex')

router.get('/', function (req, res){
    res.clearCookie("UUID");
    res.redirect('/')
})

module.exports = router