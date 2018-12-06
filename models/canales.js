const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const canalSchema= new Schema({

title:{type:String,
       default: "for the lack of a better title"},
url:String,
topUserId:String,
followers:{type:Number
  ,default:0},
upvotes:{type:Number
    ,default:0}
},{
  timestamps:{
    createdAt:'createdAt',
    updatedAt:'updatedAt'
  }
}
)
// -> set plugin into UserSchema
//userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('Canal',canalSchema)

