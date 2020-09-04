//requiring local files
const User = require('../models/user')
const customMware = require('../config/middleware')

//setting up user-action for signip
module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
      return res.redirect('/user/profile');
    }

    return res.render('sign-in',{
        title : "Sign In"
    })
}

//setting up user-action for signup
module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/user/profile');
    }
    else{
        return res.render('sign-up',{
            title:"Sign Up"
        })
    }
}

//setting up user-action for profile
module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "Profile"
    })
}


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmpassword){
        req.flash('error','Password Mismatch')
        return res.redirect('back');
    }

    if(req.body.securityPin != req.body.confirmsecurityPin){
        req.flash('error','Security Pin Mismatch')
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err) {console.log("eror in finding the user in signup"); return; }

        if(!user){
            User.create(req.body,function(err,user){
                if(err) {
                    console.log("eror in creating user in signup"); 
                    
                    return; } 
                
                return res.redirect('/user/signin');
            })
        }
        else{
            req.flash('info','Please Fill the form Correctly')
            return res.redirect('/user/signup');
        }
    })

}


//user session creation and desturction
module.exports.createSession = function(req,res){
    req.flash('success','Logged in Successfully')
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','Logged out Successfully')
    return res.redirect('/')
}
