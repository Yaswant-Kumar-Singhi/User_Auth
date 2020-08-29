//requiring global files
const express = require('express')

//requiring local files

//defining functions
const app = express()

//By default at production level the port is 80 but I have defined port to be 8000
const port = 8000


//Checking if their is an error in running 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running at port: ${port}`)
    }
    console.log(` running at port: ${port}`)
    

})