const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema= new Schema({
username:String,
googleId:String,
facebookId:String
})

module.exports = mongoose.model('User',userSchema)