var express = require('express');
var data = require('../models/sql')
var router = express.Router();
var myMiddleware = require('../models/auth')

router.get('/', myMiddleware, function (req,res) {
    var id = req.signedCookies.UUID
    data.findOne({ '_id': id }).exec((err, user) => {
        var cuser = user.user
        res.render("profile", {userdata: cuser, rmoney: user.rmoney, ID: id, date: user.date, kiemcuong: user.kiemcuong })
    })
})

module.exports = router

