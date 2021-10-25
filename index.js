// thu vien
var express = require("express")
var cookieParser = require('cookie-parser')
// var file = require('fs')
var path = require('path')

// setting apps
var app = express()

app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'views')))
app.use(cookieParser('iojkmygvbthuerfcasddfsgxvcert'))

//port and notification
const PORT = 90
app.listen(443, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
console.log()
console.log(' ____________________________________________________________________________________________________\n \
|                                                                                                  |\n \
|                                                                                                  |\n \
|                                        run on port: 1433                                         |\n \
|                                                                                                  |\n \
|                                                                                                  |\n \
====================================================================================================')

// khai báo các route
var index = require("./routes/index")
var register = require("./routes/register")
var login = require("./routes/login")
var logout = require("./routes/logout")
var napthe = require("./routes/napthe")
var profile = require("./routes/profile")
var changepass = require("./routes/contribution")
var latthe = require("./routes/latthe")
var log_minigame = require("./routes/log_minigame")

// cài đặt URL	 	
app.use("/", index)
app.use("/register", register)
app.use("/login", login)
app.use("/nap-the", napthe)
app.use("/logout", logout)
app.use("/user/profile", profile)
app.use("/user/latthe", latthe)
app.use("/user/contribution", changepass)
app.use("/user/history/minigame", log_minigame)


module.exports = app