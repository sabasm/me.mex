const router = require('express').Router();
const Post = require('../models/post')
let logged 

const authCheck=(req,res,next)=>{
  if (!req.user){
  res.redirect('/auth/login')
  }else{
    return next()
  }
  }

  router.get('/add',authCheck,(req,res,next)=>{
    console.log('ptm')
    res.send('ptm')
  })

router.post('/add',authCheck,(req,res,next)=>{
console.log(req.body)
res.send(req.body)
});

router.get('/edit',authCheck,(req,res,next)=>{
res.send('editor after upload')
})


module.exports=router

// title:String,
// creatorId:String,
// upvotes:{type:Number
//     ,default:0},
// comments:Number,
// tags:{
//   type:[String],
//   default:[0]}
// },{
//   timestamps:{
//     createdAt:'createdAt',
//     updatedAt:'updatedAt'
//   }
// }
// )