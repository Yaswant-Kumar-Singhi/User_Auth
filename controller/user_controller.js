//requiring local files
const User = require('../models/user')


//setting up user-action for signup
module.exports.signin = function(req,res){
    return res.render('sign-in',{
        title: "Sign-In",
        
    })
}

//setting up user-action for signup
module.exports.signup = function(req,res){
    return res.render('sign-up',{
        title: "Sign-Up"
    })
}

//setting up user-action for profile
module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "Profile"
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmpassword){
        return res.redirect('back');
    }

    if(req.body.securityPin != req.body.confirmsecurityPin){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err) {console.log("eror in finding the user in signup"); return; }

        if(!user){
            User.create(req.body,function(err,user){
                if(err) {console.log("eror in creating user in signup"); return; } 

                return res.redirect('/user/signin');
            })
        }
        else{
            return res.redirect('/user/signup');
        }
    })

}

module.exports.createSession = function(req,res){
    //TODO LATER
}