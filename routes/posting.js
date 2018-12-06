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

  // const canales=['juegos',
  // 'política',
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
  //   const newCanal = new Canal({
  //     title:e
  //   })
  //   newCanal.save()
  // })
 

router.post('/add',authCheck,(req,res,next)=>{
url = req.body.url
creatorId = req.user._id

const newPost = new Post({
url,
creatorId
});
newPost.save()
.then(post=>{
  //buscar el id del post por medio de su url anterior
  Post.findOne({url: url}, function (error, post) {
  })
  .then(post=>{
    // console.log('ENTRÉ AL THEN DE FIND ONE POST')
    // console.log('ME TIRA ESTO: '+ post._id)
    // console.log('se supone que mi usuario es : '+req.user.id)
    User.findOneAndUpdate({"_id":req.user._id},{$push:{"likedPost":post.url}})
    .then(res.render('posting/add',post))

      
    // console.log(req.user.likedPost)
    // console.log(post)
  })
})
.catch(err =>{
  //console.log(err)
})
});

router.get('/add',authCheck,(req,res,next)=>{
  res.send('editor after upload')
  })

router.post('/edit',authCheck,(req,res,next)=>{
  console.log(req.body)
  let title = req.body.title
  let tags = req.body.tags
  let _id = req.body.id

  Post.findOneAndUpdate({_id},{title,tags})
  .then(post=>{
    post.tags.forEach(tag => {
      Canal.findOne({title: tag}, function (error, canal) {
      Canal.findByIdAndUpdate(canal._id, {$push: {"posts": post._id}}).then(res.redirect('/perfil'))
      })
      
    });
  })
   
})

router.get('/edit',authCheck,(req,res,next)=>{
  res.send('guardando edit')
})

module.exports=router