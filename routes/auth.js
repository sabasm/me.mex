const router = require ('express').Router()
const passport = require('passport')
const User = require(`../models/user`) // User model

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
// router.get('/signup', passport.authenticate('local'),(req,res,next)=>{
//     res.render('auth/signup')
// })

// router.post('/login', 
// passport.authenticate('local', { failureRedirect: '/login' }),
// function(req, res) {
//   res.redirect('/profile');
// });


// signup routes
router.get(`/signup`, (req, res) => res.render(`auth/signup`))

router.post(`/signup`, function(req, res) {
    
	User.register( new User({
            username: req.body.username,
            email: req.body.email
            
		}),
        req.body.password,
        req.body.password2,
		err => {
			if (err) {
				console.log(err)
				return res.render(`/`)
			}
			passport.authenticate(`local`)(req, res, () => {
				res.redirect(`/secret`)
			})
		}
	)
})


router.post(
	`/login`,
	passport.authenticate(`local`, {
		successRedirect: `/perfil/`,
		failureRedirect: `/auth/login`
	})
)


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