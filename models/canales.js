const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const canalSchema= new Schema({

title:String,
topUserId:String,
followers:{type:Number
  ,default:0},
upvotes:{type:Number
    ,default:0},
posts:{
  type:[String],
  }
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

