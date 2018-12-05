const mongoose = require('mongoose')
var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const userSchema= new Schema({
username:String,
googleId:String,
facebookId:String,
email:String,
bio:{type:String
,default:"Aquí va tu bio o mensaje personal"},
canalesNumber:{type:Number
  ,default:0},
likes:{type:Number
  ,default:0},
  upvotes:{type:Number
    ,default:0},
likedPost:{
  type:[String],
  // for testing only propouses,here should go somenthink like, not uploded nor liked yet n stuff:
  default:['https://www.catster.com/wp-content/uploads/2015/06/600px-outer-space-longcat-6ztyxR.jpg','https://i.kym-cdn.com/entries/icons/original/000/024/062/jerry.jpg','https://pbs.twimg.com/profile_images/2370446440/6e2jwf7ztbr5t1yjq4c5_400x400.jpeg']
}
})
// -> set plugin into UserSchema
//userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User',userSchema)
