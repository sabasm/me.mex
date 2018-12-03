require('dotenv').config();

const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

//se le necesita llamar al helper para que inicie el proceso del código al cargar la pág aun que no se utilice en app.js
const passportSetup = require('./helpers/passport')
//important stuff ^^^^^^^^

const passport = require('passport')
const cookieSession = require('cookie-session')

const app = express();

//view engine Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

//COOKIES
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.cookeyKey]
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())


//set up routes
const auth = require('./routes/auth')
const index = require('./routes/index');
const perfil = require('./routes/perfil')
//conect to mongoose
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Conectado a MLAB memex DB`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// default value for title local
app.locals.title = 'MemeCanales#';

//AUTHS
//------GOOGLE+
app.get('/auth/google', passport.authenticate('google', {
  scope: 'https://www.google.com/m8/feeds'
}))

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    res.redirect('/');
  });
//------FACEBOOK
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use('/perfil', perfil)
app.use('/auth', auth)
app.use('/', index);

app.listen(3000, () => {
  console.log('Escuchando port 3000')
})

module.exports = app;