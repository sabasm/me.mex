const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const postSchema= new Schema({
title:{type:String,
       default: "for the lack of a better title"},
url:String,
creatorId:String,
upvotes:{type:Number
    ,default:0},
comments:Number,
tags: [String]
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
