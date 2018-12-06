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

router.post('/add',authCheck,(req,res,next)=>{
  console.log(req.user)

// Assuming this is from a POST request and the body of the
// request contained the JSON of the new "todo" item to be saved
url = req.body.url
creatorId = req.user._id

const newPost = new Post({
url,
creatorId
});
newPost.save()
.then(post=>{
  return res.status(200).send(newTodoObj)
})
.catch(err =>{
  return res.status(500).send(err);
})
res.render('posting/add')
});

router.get('/add',authCheck,(req,res,next)=>{
  res.send('editor after upload')
  })

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