const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const userSchema= new Schema({
username:String,
googleId:String,
facebookId:String,
email:String,
photoURL: String,
bio:{type:String
,default:"Aquí va tu bio o mensaje personal"},
canalesNumber:{type:Number
  ,default:0},
follows:{
    type:[String],
    },
likes:{type:Number
  ,default:0},
  upvotes:{type:Number
    ,default:0},
likedPost:{
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
module.exports = mongoose.model('User',userSchema)
