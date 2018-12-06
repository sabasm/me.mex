const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const postSchema= new Schema({
title:String,
<<<<<<< HEAD
url:String,
=======
imgURL: String,
>>>>>>> 4a93b5b51811e6ba9cd005986eee2e87b0e01d22
creatorId:String,
upvotes:{type:Number
    ,default:0},
comments:Number,
tags:{
  type:[String],
  default:[0]}
},{
  timestamps:{
    createdAt:'createdAt',
    updatedAt:'updatedAt'
  }
}
)
// -> set plugin into UserSchema
//userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('Post',postSchema)
