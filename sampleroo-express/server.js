const express = require('express')
const app = express()
const port = require('./portNumber');
const attachDatabase = require('./dbProvider');
const getProducts = require('./getProducts');
const getSubCategory = require('./getSubCategory');
const getBrands = require('./getBrands');
const registerUser = require('./registerUser');
const checkEmail = require('./checkEmail');
const verifyEmail = require('./verifyEmail');
const login = require('./logni');
const forgetPassword = require('./forgetPassword');
const https = require('https');
const fs = require('fs');
const setNewPassword = require('./setNewPassword');

var key = fs.readFileSync('./certs/selfsigned.key');
var cert = fs.readFileSync('./certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app.use(express.static('html'));
app.use(express.json());
app.use(attachDatabase);
app.get('/products/all', getProducts);
app.get('/products/category/:productId', getSubCategory);
app.get('/brands/category/:subCategoryId', getBrands);
app.post('/register/user', registerUser);
app.get('/register/checkemail/:email', checkEmail);
app.get('/verifyEmail/:id', verifyEmail);
app.post('/login', login);
app.post('/forgetPassword', forgetPassword);
app.post('/setNewPassword', setNewPassword);
var server = https.createServer(options, app);

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');
const GOOGLE_CLIENT_ID = '46589627879-s3h484oiip5iu6ovb8d1lrqttb1oc3n0.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'nIQmH6kjcKkdk9mcRzoFnJiz';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    return cb(null, profile.id);
  }
));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
