const router = require('express').Router();
const User = require('../models/user')


router.get('/',(req,res,next)=>{
  res.render('politicadeprivacidad')
})

module.exports=router