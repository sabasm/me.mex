const mongoose = require('mongoose')
//var passportLocalMongoose = require(`passport-local-mongoose`)
const Schema = mongoose.Schema
const canalSchema= new Schema({

title:{type:String,
  enum:
   ['Política',
    'Deportes',
    'Videojuegos',
    'Animales',
    'Series',
    'Películas',
    '+18',
    'Caricaturas',
    'Vehículos',
    'WTF',
    'Otros',
    'Tech',
    'Ciencias',
    'Anime/Manga',
    'Relaciones',
    'Mensajes de texto'],
    default: "título del canal"},
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

