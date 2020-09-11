//requiring mongoose
const mongoose = require('mongoose');

//creatig user schema.
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required :true
    }
    
},{
    timestamps : true
});


//creating user model and exporting it
const user = mongoose.model('user',userSchema);
module.exports = user;