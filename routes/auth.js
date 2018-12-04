const router = require ('express').Router()
const passport = require('passport')

//auth login
router.get('/login',(req,res,next)=>{
res.render('auth/login')
})

//auth logout
router.get('/logout',(req,res,next)=>{
    //handle with passport
    req.logout()
    res.redirect('/')
})


//auth LOCAL
// passport.use(new LocalStrategy(©
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//auth with google

router.get('/google', passport.authenticate('google',{
    scope:['profile']
}),(req,res,next)=>{
    console.log('loggin with google...')
})


//callback route for google
router.get('/google/redirect',passport.authenticate('google'),(req,res,next)=>{
    //res.send(req.user)
    res.redirect('/profile/')
})

//auth with facebook
router.get('/facebook',passport.authenticate('facebook', { scope: ['id', 'displayName', 'photos', 'email'] }),(req,res,next)=>{
    console.log('loggin with Facebook...')
})

//callback route for facebook
router.get('/facebook/redirect',passport.authenticate('facebook'),(req,res,next)=>{
    res.send(req.user)
})

module.exports= router