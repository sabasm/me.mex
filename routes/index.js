const express = require('express');
const router  = express.Router();
const Posts = require('../models/post')

/* GET home page */

router.get('/', (req, res, next) => {
  Posts.find()
  .then(allThePosts=>{
    let posts = allThePosts.reverse()
    res.render('index',{posts})
  })
  
});

router.post('/search', (req,res,next) => {
  let {search} = req.body
  Posts.find({ $or: [ 
  {title: {$regex: `${search}`, "$options": "i"}},
  {tags: `${search}`}
  ]})
  .then( posts => {
    res.render('index', {posts})
  })
  .catch( e => next(e))
})

module.exports = router;