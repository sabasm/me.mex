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
tags:{
  type:[String],
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
    default: "Otros"}
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
