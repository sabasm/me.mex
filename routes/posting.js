const router = require('express').Router();
const User = require('../models/user')
let logged 

const authCheck=(req,res,next)=>{
  if (!req.user){
  res.redirect('/auth/login')
  }else{
    return next()
  }
  }


  router.get('/add',authCheck,(req,res,next)=>{

})

router.post('/add',authCheck,(req,res,next)=>{
  res.send('posted')
});



// router.post('/add',authCheck,(req,res,next)=>{
//   let username = req.body.username
//   let email=req.body.email
//   let bio = req.body.bio

//   User.findByIdAndUpdate(req.user._id,{username,bio,email})
//   .then(
//     res.redirect('/perfil'))
// })

module.exports=router