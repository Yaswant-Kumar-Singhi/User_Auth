//requiring library
const mongoose = require('mongoose');

//connecting with mongodb using connection string
mongoose.connect('mongodb://localhost/userAuth', {useNewUrlParser: true, useUnifiedTopology: true} );

// checking the connection 
var db = mongoose.connection;

//if their is an error
db.on('error', console.error.bind(console, 'connection error:'));


//for successful connection 
db.once('open', function() {
    console.log('Successfully connected to the database');
});