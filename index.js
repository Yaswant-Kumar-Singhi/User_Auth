//requiring global files
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const sassMiddleware = require('node-sass-middleware')

//requiring local files


//defining functions
const app = express()


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