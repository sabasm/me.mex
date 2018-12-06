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

module.exports = router;
