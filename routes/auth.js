const router = require('express').Router()
const passport = require('passport')
const User = require(`../models/user`) // User model

//auth login
router.get('/login', (req, res, next) => {
	res.render('auth/login')
})

//auth logout
router.get('/logout', (req, res, next) => {
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

//forgoten routes
router.get('/semefue',(req,res,next)=>{
	res.render('auth/forgoten')
})


// router.post('/semefue',(req,res,next)=>{
// 	data = req.body.forgotenUser

// 			// if (User.findOne(username)) {
// 			// 	res.flash("'" + e + "' ya está tomado")
// 			// }
// 	res.render('auth/forgoten')
// })

// signup routes
router.get(`/signup`, (req, res) => res.render(`auth/signup`))

router.post(`/signup`,(req, res)=> {

			username = req.body.username
			email = req.body.email
			password = req.password
			password2 = req.password2

			// if (User.findOne(username)) {
			// 	res.flash("'" + e + "' ya está tomado")
			// } else

			// if (User.findOne(email)) {
			// 	res.flash("'" + e + "' ya está utilizado, olvidaste tu contraseña?")
			// }else{
				User.register(req.body, req.body.password
				).then(
					
					// res.render('/perfil')
					res.send('Listo putita')
				)
				.catch(e=>console.log(e))
			// }
		})


				// User.register(new User({
				// 		username,
				// 		email,
				// 		password
				// 	}),
				// 	err => {
				// 		if (err) {
				// 			console.log(err)
				// 			return res.render(`/`)
				// 		}
				// 		passport.authenticate(`local`)(req, res, () => {
				// 			res.redirect(`/perfil`)
				// 		})
				// 	}

			


			router.post(
				`/login`,
				passport.authenticate(`local`, {
					successRedirect: `/perfil/`,
					failureRedirect: `/auth/login`
				})
			)


			//auth with google

			router.get('/google', passport.authenticate('google', {
				scope: ['profile']
			}), (req, res, next) => {
				console.log('loggin with google...')
			})


			//callback route for google
			router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
				//res.send(req.user)
				res.redirect('/profile/')
			})

			//auth with facebook
			router.get('/facebook', passport.authenticate('facebook', {
				scope: ['id', 'displayName', 'photos', 'email']
			}), (req, res, next) => {
				console.log('loggin with Facebook...')
			})

			//callback route for facebook
			router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res, next) => {
				res.send(req.user)
			})

			module.exports = router