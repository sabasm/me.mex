const router = require('express').Router();

const authCheck=(req,res,next)=>{
if (!req.user){
res.redirect('/auth/login')
}else{
  return next()
}
}

router.get('/',authCheck,(req,res,next)=>{
  res.render('perfil',req.user)
})

module.exports=router