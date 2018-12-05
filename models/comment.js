const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const commentSchema= new Schema({
creatorId:String,
text:String,
upvotes:{type:Number
    ,default:0},
    downvotes:{type:Number
      ,default:0},
postId:String
},{
  timestamps:{
    createdAt:'createdAt',
    updatedAt:'updatedAt'
  }
}
)
// -> set plugin into UserSchema
//userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('Comment',commentSchema)
