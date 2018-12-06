const router = require('express').Router();
const Post = require('../models/post')
const Canales = require('../models/canales')
let logged 


router.get('/',(req,res,next)=>{
  Canales.find().then(all=>

res.render('canales/lista',{all})
  )
});

router.get('/:canal',(req,res,next)=>{
  let canal = req.params.canal
  Post.find({tags:canal}).then(posts=>
res.render('canales/canal',{posts})
  )
});



module.exports=router