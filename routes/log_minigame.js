//module
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser')
var sending = require('request')
var hashing = require('../models/hashing')

//bodyparser config
var app = express()
var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: true })

//login checker
var myMiddleware = require('../models/auth')

//database
var data = require('../models/sql');
var log_sql = require('../models/log_sql');
const { request } = require('express');

router.get('/', myMiddleware, function (req, res) {
    var id = req.signedCookies.UUID
    data.findOne({ '_id': id }).exec((err, user) => {
        var cuser = user.user
        res.render("log_minigame", {userdata: cuser, rmoney: user.rmoney, Date: '', Host: '', Ma_the: '', Serial: '', Amount: '', Status: '', Note: '' })
    })
})
router.post('/', urlencodedParser, async function (req, res) {
    if (!req.body.Minigame) {
        var id = req.signedCookies.UUID
        data.findOne({ '_id': id }).exec(async (err, user) => {
            var list = []
            var count = -1
            var list_the = user.log_minigame.reverse()
            let con = log_sql
            var sql = "SELECT * FROM shopweb_minigamedatas WHERE _id = ?"
            
            for (i = 1; list_the[count + 1]; i++) {
                count += 1
                var id_the = list_the[count]
                if (id_the === undefined) {
                    break
                }
                else {
                    console.log(id_the)

                    con.query(sql, [id_the], function (err, lst_the) {
                        if (err) {
                            // ////console.log(err)
                        }
                        else {
                            // Date.push(lst_the[0].Date)
                            // Host.push(lst_the[0].Host)
                            // Ma_the.push(lst_the[0].Ma_the)
                            // Serial.push(lst_the[0].Serial)
                            // Amount.push(lst_the[0].Amount)
                            // Status.push(lst_the[0].Status)
                            // Note.push(lst_the[0].Note)
                            list.push(lst_the[0])
                            console.log(list)
                            // console.log(Date)
                        }
                    })
                }

                // console.log("DATE:", Date)
            }
            con.query(sql, [id_the], async (err, lst_the) => {
                console.log('list:', list)
                if (list[0]){
                    return await res.json({ list: list })
                }
                else{
                    list.push({
                        _id: '',
                        Date: "Không có dữ liệu",
                        Minigame: "",
                        Gift:'',
                        Cost: ''
                    })
                    return await res.json({ list: list }) 
                }
                
            })
        })
    }
    else if (req.body.Minigame) {
        var id = req.body.UUID
        var Date = req.body.Date
        var Minigame = req.body.Minigame
        var Gift = req.body.Gift
        var Cost = req.body.Cost
        let con = log_sql
            con.connect(function (err) {
                //console.log(err)
                console.log("connected !!!")
                var sql = "SELECT * FROM shopweb_minigamedatas WHERE Date = ? AND Minigame = ? AND Gift = ? AND Cost = ?"
                con.query(sql, [Date, Minigame, Gift, Cost], function (err, the) {
                    if (err) {
                        console.log(the)
                    }
                    else {
                        console.log("search for id thẻ thành công")
                        var lst_the = the.reverse()
                        var id_the = lst_the[0]._id
                        data.findOne({ '_id': id }, function (err, user) {
                            var list = user.log_minigame
                            list.push(id_the)
                            user.log_minigame = list
                            user.save(function (err) {
                                if (err) {
                                    console.log('update thẻ thất bại')
                                    res.send('fail')
                                } else {
                                    var msg = 'update thẻ thành công'
                                    console.log(msg)
                                    res.send('success')
                                }
    
                            })
                        })
                    }
                })
            })
        
    }

})



module.exports = router

