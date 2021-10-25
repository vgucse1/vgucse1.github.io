const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/userdatas', { useNewUrlParser: true, useUnifiedTopology: true })
.catch((err)=>console.log(err))
const schema = new mongoose.Schema({
    user: String,
    pass: String,
    alphabet_key: String,
    numbly_key: String,
    date: String,
    rmoney: Number,
    kiemcuong: Number,
    freeplay: Number,
    count_latthe: Number,
    count_vongquay: Number,
    count_vongquay2: Number,
    log_napthe: [String],
    log_transfer: [String],
    log_rutkiemcuong: [String],
    log_minigame: [String],
})

module.exports = mongoose.model('userdata',schema)