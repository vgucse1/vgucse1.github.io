// import thư viện
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser')
var hashing = require('../models/hashing')


//database setup
var data = require('../models/sql');



//post setup
var app = express()
var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: true })


//ejs linker
router.get('/', function (req, res) {
    res.render("login", { mess_err: "" })
})

//login
router.post('/', urlencodedParser, function (req, res) {
    var ruser = req.body.username
    var rpass = req.body.password
    if (ruser && rpass) {
        data.findOne({ 'user': ruser }).exec((err, user) => {

            if (!user) {
                var msg = 'tài khoản chưa tồn tại'
                res.render('login', { mess_err: msg });
            }
            else if (user) {
                var id = user._id
                var pass = user.pass
                var key1 = user.alphabet_key
                var key2 = user.numbly_key

                if (pass === hashing.unhash(rpass, key1, key2)) {
                    res.cookie('UUID', id, {
                        signed: true
                    })
                    res.redirect('/')
                }
                else {
                    var msg = 'mật khẩu không đúng'
                    res.render('login', { mess_err: msg });
                }
            }

        })
    }
    else {
        var msg = 'hãy điền đủ thông tin'
        console.log(msg)
        res.render('login', { mess_err: msg });
    }

})

module.exports = router

