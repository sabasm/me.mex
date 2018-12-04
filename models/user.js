const mongoose = require('mongoose')
var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const userSchema= new Schema({
username:String,
googleId:String,
facebookId:String,
email:String,
password:String
})
// -> set plugin into UserSchema
userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User',userSchema)
