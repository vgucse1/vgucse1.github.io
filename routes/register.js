// import thư viện
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser')


//database setup
var data = require('../models/sql');



//bộ mã hóa
var hashing = require('../models/hashing')


//post setup
var app = express()
var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: true })


//ejs linker
router.get('/', function (req, res) {
    res.render("register", { mess_err: "" })
})


//register
router.post('/', urlencodedParser, function (req, res) {
    var ruser = req.body.username
    var rpass = req.body.password
    var rcon = req.body.password_confirmation
    if (ruser && rpass && rcon) {
        console.log(req.body)
        data.findOne({ 'user': ruser }, function (err, user) {
            if (user) {
                var msg = 'tài khoản đã tồn tại'
                res.render('register', { mess_err: msg })
            }
            // if (user) {
            //     var msg = 'tài khoản đã tồn tại, hãy chọn user khác';
            //     res.render('register', { mess_err: msg });
            // }
            else if (err) {
                console.log(err)
            }
            else if (!user && !err) {
                if (rpass != rcon) {
                    var msg = 'phần xác nhận mật khẩu không đúng'
                    res.render('register', { mess_err: msg });
                }
                else if (rpass.length < 6) {
                    var msg = 'mật khẩu cần tối thiểu 6 ký tự'
                    res.render('register', { mess_err: msg });
                    console.log(msg)
                }
                else if (rpass.length >= 6) {
                    if (rpass = rcon) {
                        let hashed = hashing.hash(rpass)
                        var rmoney = 0
                        var kiemcuong = 0
                        var userdangky = new data();
                        var d = new Date()
                        var month = [1,2,3,4,5,6,7,8,9,10,11,12]
                        var date = d.getDate() + '/' + month[d.getMonth()] + '/' + d.getFullYear()
                        userdangky.user = ruser;
                        userdangky.pass = hashed.hashedpass;
                        userdangky.alphabet_key = hashed.alphabet_key
                        userdangky.numbly_key = hashed.numbly_key
                        userdangky.date = date
                        userdangky.rmoney = rmoney
                        userdangky.kiemcuong = kiemcuong

                        userdangky.save(function (err) {
                            if (err) throw err
                            res.redirect('/login');
                            console.log("user registed");
                            // console.log('pass:', hashed.hashedpass)
                        })
                    }

                }

            }

        });
    }
    else {
        var msg = 'hãy điền đủ thông tin'
        console.log(msg)
        res.render('register', { mess_err: msg });
    }

})

module.exports = router
