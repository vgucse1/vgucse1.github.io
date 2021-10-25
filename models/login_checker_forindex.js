var data = require('./sql')
function CheckLogin(req, res) {
    if (typeof req.headers.cookie == "undefined") {
        return false
    }
    else {
        var id = req.signedCookies.UUID
        if (!id){
            return false
        }
        var user = data.findOne({ '_id': id })
        if (id) {
            return true
        }
        else{
            return false
        }
    }
}


module.exports = CheckLogin