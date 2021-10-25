//thư viện
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser')

//database
var data = require('../models/sql')

//mã hóa
var hashing = require('../models/hashing')

//post setup
var app = express()
var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: true })

//middelware
var myMiddleware = require('../models/auth')

//ejs rendering
router.get('/', myMiddleware, function (req,res) {
    var id = req.signedCookies.UUID
    data.findOne({ '_id': id }).exec((err, user) => {
        var cuser = user.user
        var msg = ''
        res.render("contribution", {done: false, mess_err: msg, userdata: cuser, rmoney: user.rmoney })
    })
})


module.exports = router