//import thư viện
var express = require('express');
var data = require('../models/sql')
var router = express.Router();
var myMiddleware = require('../models/auth')
var bodyparser = require('body-parser')
var sending = require('request')
var log_sql = require('../models/log_sql')

//post setup
var app = express()
var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: true })

function ran(a) {
    // var ran = [1,1,1,1,1, 1,1,1,1,1, 1,1,
    //            2,2,2,2,2, 2,2,2,2,2, 2,
    //            3,3,3,3,3, 3,3,3,3,3, 3,
    //            4,4,4,4,4, 4,4,4,4,4, 4,
    //            5,5,5,5,5, 5,5,5,5,5, 5,]

    var ran = []
    //set tỷ lệ
    var _1 = 0.015625
    var _2 = 0.03125
    var _3 = 0.0625
    var _4 = 0.125
    var _5 = 0.25
    var _6 = 1.5
    var _7 = 1 + 2.015625 + 3
    var _8 = 92



    //15000 kc
    for (i = 0; i <= _1; i += 0.0001) {
        ran.push(1)
    }

    //9999 kc
    for (i = 0; i <= _2; i += 0.0001) {
        ran.push(2)
    }

    //500 - 9999
    for (i = 0; i <= _3; i += 0.0001) {
        ran.push(3)
    }

    //300 kc
    for (i = 0; i <= _4; i += 0.0001) {
        ran.push(4)
    }

    //100 kc
    for (i = 0; i <= _5; i += 0.0001) {
        ran.push(5)
    }

    //90 kc
    for (i = 0; i <= _6; i += 0.0001) {
        ran.push(6)
    }

    //75 kc
    for (i = 0; i <= _7; i += 0.0001) {
        ran.push(7)
    }

    //35 kc
    for (i = 0; i <= _8; i += 0.0001) {
        ran.push(8)
    }

    var key = Math.floor(Math.random() * 1000001);
    var outer = ran[key]
    switch (outer) {
        case 1:
            var out = '/upload-usr/images/ijx8l3chlo_1580998514.png'
            return out
        case 2:
            var out = '/upload-usr/images/igzebgjknx_1580998308.png'
            return out
        case 3:
            var out = '/upload-usr/images/jf8qmfpynz_1580998277.png'
            return out
        case 4:
            var out = '/upload-usr/images/fthv4vamij_1591268374.png'
            return out
        case 5:
            var out = '/upload-usr/images/kks2ulrmmo_1581218967.png'
            return out
        case 6:
            var out = '/upload-usr/images/2jodvezjbo_1580998543.png'
            return out
        case 7:
            var out = '/upload-usr/images/rybbt5u2yl_1580998294.png'
            return out
        case 8:
            var out = '/upload-usr/images/x0lz1xsyrt_1580998484.png'
            return out

    }
    return out
}

router.get('/', myMiddleware, function (req, res) {
    var id = req.signedCookies.UUID
    data.findOne({ '_id': id }).exec((err, user) => {
        var cuser = user.user
        res.render("latthe", { userdata: cuser, status: '', kq: '', rmoney: user.rmoney })
    })
})

router.post('/', urlencodedParser, function (req, res) {
    var id = req.signedCookies.UUID
    var rid = []
    rid.push(id)
    rid = rid[0]
    data.findOne({ '_id': id }).exec((err, user) => {
        var money = user.rmoney
        if (req.body.click === 'clicked') {

            let list = [
                '/upload-usr/images/ijx8l3chlo_1580998514.png',
                '/upload-usr/images/igzebgjknx_1580998308.png',
                '/upload-usr/images/jf8qmfpynz_1580998277.png',
                '/upload-usr/images/fthv4vamij_1591268374.png',
                '/upload-usr/images/kks2ulrmmo_1581218967.png',
                '/upload-usr/images/2jodvezjbo_1580998543.png',
                '/upload-usr/images/rybbt5u2yl_1580998294.png',
                '/upload-usr/images/x0lz1xsyrt_1580998484.png',
                '/upload-usr/images/scemiamyxy_1580998556.png'
            ]

            let kq = req.body.kq


            function checker(a) {
                if (a != kq) {
                    return a

                }
            }

            let listpop = list.filter(checker)
            var outer = []
            let limit = 7
            for (i = 0; i <= limit; i++) {
                let partical = Math.floor(Math.random() * 9);
                if (outer.includes(listpop[partical])) {
                    limit += 1

                }
                else if (!listpop[partical]) {
                    limit += 1

                }
                else if (!outer.includes(listpop[partical])) {

                    outer.push(listpop[partical])

                }
            }
            console.log(outer)
            res.send(JSON.stringify(outer))


        }
        else if (req.body.click === 'click') {
            if (money >= 20000) {
                var kq = ran()
                var amount = 0
                //update database
                switch (kq) {
                    case '/upload-usr/images/x0lz1xsyrt_1580998484.png':
                        amount = 35
                        break
                    case '/upload-usr/images/rybbt5u2yl_1580998294.png':
                        amount = 75
                        break
                    case '/upload-usr/images/2jodvezjbo_1580998543.png':
                        amount = 90
                        break
                    case '/upload-usr/images/kks2ulrmmo_1581218967.png':
                        amount = 100
                        break
                    case '/upload-usr/images/fthv4vamij_1591268374.png':
                        amount = 300
                        break
                    case '/upload-usr/images/jf8qmfpynz_1580998277.png':
                        amount = Math.floor(Math.random() * 9500) + 500
                        break
                    case '/upload-usr/images/igzebgjknx_1580998308.png':
                        amount = 9999
                        break
                    case '/upload-usr/images/ijx8l3chlo_1580998514.png':
                        amount = 15000
                        break
                }

                let con = log_sql;
                var d = new Date()
                var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                var minute= d.getMinutes()
                var hours = d.getHours()
                console.log('min:',minute) 
                
                if (hours >= 10) {
                    if (minute >= 10) {
                        var date = d.getHours() + ':' + minute + ' - ' + d.getDate() + '/' + month[d.getMonth()] + '/' + d.getFullYear()
                        console.log('min:',minute)  
                    }
                    else if (minute < 10){
                        var date = d.getHours() + ':0' + minute + ' - ' + d.getDate() + '/' + month[d.getMonth()] + '/' + d.getFullYear()
                        console.log('min:',minute)  
                    }
                }
                else if (hours < 10){
                    if (minute >= 10) {
                        var date = '0' + hours + ':' + minute + ' - ' + d.getDate() + '/' + month[d.getMonth()] + '/' + d.getFullYear()
                        console.log('min:',minute)  
                    }
                    else if (minute < 10){
                        var date = '0' + hours + ':0' + minute + ' - ' + d.getDate() + '/' + month[d.getMonth()] + '/' + d.getFullYear()
                        console.log('min:',minute)  
                    }  
                }
                
                
                user.kiemcuong += amount
                user.rmoney -= 20000
                user.save(function (err) {
                    if (err) {
                        console.log(err)
                        res.send('không trừ được tiền')
                    } else {
                        con.connect(function (err) {
                            if (err) {
                                console.log(err)
                            }
                            console.log("connected !!!")
                            var sql = "INSERT INTO shopweb_minigamedatas (Date, Minigame, Gift, Cost) VALUES (?)"
                            var values = [
                                date, 'Lật Bài', amount,'20000'
                            ]
                            con.query(sql, [values], function (err, res) {
                                if (err) {
                                    //console.log(err)
                                }
                                sending.post('http://shop.monsterrr.net/user/history/minigame',
                                    {
                                        form: {
                                            Date: date,
                                            Minigame: 'Lật Bài',
                                            Gift: amount,
                                            Cost: 20000,
                                            UUID: rid
                                        }
                                    },
                                    function (error, response, body) {
                                    }
                                )
                                
                                console.log("gửi id Gửi thành công")
                            })
                        })
                        res.send(kq)
                        
                    }

                })


            }
            else {
                res.send('noten')
            }

        }
    })

})

/*
var count = 0
var setvar = 0;
var setin = setInterval(() => {
        $("#round").css({
            "transform": "rotate("+count+"deg)"
        });
count = count + setvar;
if (count == 360){
    setvar = -setvar;
}
},0);

*/


module.exports = router