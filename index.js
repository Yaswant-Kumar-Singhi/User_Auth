//requiring global files
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const sassMiddleware = require('node-sass-middleware')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);



//requiring local files
const db = require('./config/mongoose');
const passportLocal = require('./config/passport-local-strategy');


//defining functions
const app = express()

//reading through post request
app.use(express.urlencoded());
//setting up cokie parser
app.use(cookieParser());

//using saas middleware to convert scss files to css files
app.use(sassMiddleware({
    src : './assets/scss',
    dest : './assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}))

//using static files
app.use(express.static('./assets'));

//By default at production level the port is 80 but I have defined port to be 8000
const port = 8000



//we are defining it above routes because routes will be rendering some views and those
//views belong from some sort of layouts.
app.use(expressLayouts);

//extract styles and scripts from sub pages
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)



//creating session
app.use(session({
    name : 'habbitTracker',
    //TODO change the secret in production mode
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store : new MongoStore(
        {
        
            mongooseConnection : mongoose.connection,
            autoRemove : 'disabled'

        }, function(err){
        console.log(err)
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


//using routes for routing to different pages
app.use('/',require('./routes'));


//seting up view engine
app.set('view engine','ejs');
app.set('views','./views');





//Checking if their is an error in running 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running at port: ${port}`)
    }
    console.log(`running at port: ${port}`)

})