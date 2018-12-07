require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy= require('passport-facebook').Strategy;
const LocalStrategy=require('passport-local')
const User = require('../models/user');


//SERIALIZE and DESERIALIZE for COOKIES SESSION 3rd party
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
// //SERIALIZE and DESERIALIZE for COOKIES SESSION LOCAL
// // -> Passport strategy based on User model with plugin (local-mongoose)
// passport.use(new LocalStrategy(User.authenticate()))
// // -> Serialize and deserialize User in session
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

//STRATEGIES
//----------LOCAL
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

//----------GOOGLE+
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGCLIENTID,
        clientSecret: process.env.GOOGCLIENTSECRET,
        callbackURL: '/auth/google/redirect'
    }, (Token, secretToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    photoURL: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

//-----------FACEBOOK
passport.use(new FacebookStrategy({
    clientID: process.env.FACEAPPID,
    clientSecret: process.env.FACEAPPKEY,
    callbackURL: "https://memecanales.herokuapp.com/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    // check if user already exists in our own db
    console.log(User)
    User.findOne({facebookId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have this user
            console.log('user is: ', currentUser);
            done(null, currentUser);
        } else {
            // if not, create user in our db
            new User({
                facebookId: profile.id,
                username: profile.displayName
            }).save().then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
            });
        }
    });
  }
));