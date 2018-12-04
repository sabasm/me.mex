const router = require('express').Router();

router.get('/',(req,res,next)=>{
  res.render('trending')
})

module.exports=router