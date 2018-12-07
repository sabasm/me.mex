const router = require('express').Router();
const Post = require('../models/post')
const User = require('../models/user')
const Canal = require('../models/canales')
let logged 

const authCheck=(req,res,next)=>{
  if (!req.user){
  res.redirect('/auth/login')
  }else{
    return next()
  }
  }

  
  // ,'política',
  // 'deportes',
  // 'animales',
  // 'películas',
  // 'series',
  // 'caricaturas',
  // 'WTF',
  // 'tech',
  // 'mensajesDeTexto',
  // 'vehículos',
  // '+18',
  // 'vehículos',
  // 'ciencias',
  // 'anime',
  // 'relaciones']

  // canales.forEach(e=>{
    //----------------------------------TO ADD CHANNELS
    //const canales='food'
    // const newCanal = new Canal({
    //   title:canales
    // })
    // newCanal.save()
  // })

router.post('/like',authCheck, (req,res,next)=> {
  console.log('liked on backend')
  let {value} = req.body
  console.log(value)
  User.findByIdAndUpdate(req.user._id,{$push:{"likedPost":value}, $inc: {likes: 1}})
  .then( response => {
    res.sendStatus(201);
  })
})
 
router.post('/add',authCheck,(req,res,next)=>{
const url = req.body.url
const creatorId = req.user._id

const newPost = new Post({
url,
creatorId
});

newPost.save()
.then(post => {
  User.findByIdAndUpdate({"_id":req.user._id},{$push:{"likedPost":post.url}, $inc: {likes: 1}})
  .then(user => {
    res.render('posting/add',post)
    })
  .catch(e => next(e))

})
});

router.post('/edit',authCheck,(req,res,next)=>{
  let title = req.body.title
  let tags = req.body.tags
  let _id = req.body.id

  Post.findByIdAndUpdate(_id,{title,tags})
  .then(post=>{
    post.tags.forEach(tag => {
      Canal.findOne({title: tag}, function (error, canal) {
      Canal.findByIdAndUpdate(canal._id, {$push: {"posts": post._id}})
      })
      
    });
    res.redirect('/perfil')
  })
   
})

router.get('/edit',authCheck,(req,res,next)=>{
  res.send('guardando edit')
})

module.exports=router