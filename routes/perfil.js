const router = require('express').Router();
const User = require('../models/user')

const authCheck=(req,res,next)=>{
if (!req.user){
res.redirect('/auth/login')
}else{
  return next()
}
}

router.get('/',authCheck,(req,res,next)=>{
  let user = req.user
  let posts = req.user.likedPost.reverse()
  res.render('perfil/perfil',{user,posts})
})

//EDITOR DE PERFIL

router.get('/edit',authCheck,(req,res,next)=>{
  res.render('perfil/edit',req.user)
})
router.post('/edit',(req,res,next)=>{
  let username = req.body.username
  let email=req.body.email
  let bio = req.body.bio

  User.findByIdAndUpdate(req.user._id,{username,bio,email})
  .then(
    res.redirect('/perfil'))
})

module.exports=router