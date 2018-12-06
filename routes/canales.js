const router = require('express').Router();
const Post = require('../models/post')
const Canales = require('../models/canales')
let logged 


router.get('/',(req,res,next)=>{
  Canales.find().then(all=>

res.render('canales/lista',{all})
  )
});

module.exports=router