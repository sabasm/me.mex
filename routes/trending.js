const router = require('express').Router();
const Post = require('../models/post')
const Canales = require('../models/canales')
let logged 

router.get('/',(req,res,next)=>{
  console.log(req)
  var yesterday = Date.now()- 1000*60*60*24;
  Post.find({createdAt:{$gt:yesterday}}).sort({upvotes: -1}).limit(20)
  .then(posts=>
res.render('index',{posts})
  )
});



module.exports=router