var data = require('./sql')

function authChecker(req, res, next) {
    if (typeof req.headers.cookie == "undefined") {
        res.redirect('/login')
        return false
    }
    else {
        var id = req.signedCookies.UUID
        if (!id){
            res.redirect('/login')
            return false
        }
        var user = data.findOne({ '_id': id })
        if (user) {
            next();
        }
        else{
            res.redirect('/login')
            return false
        }
        
    }
}


module.exports = authChecker