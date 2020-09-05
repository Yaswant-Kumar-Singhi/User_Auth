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

//creating action for updating password in db
module.exports.update = async function(req,res){
    try {
        if (req.query.id == req.user.id) {
            let userFound = await User.findById(req.query.id);
            
            if (userFound) {
                await User.findByIdAndUpdate(req.query.id, { password: req.body.password });
                req.flash("success", "Profile Updated Successfully!");
                return res.redirect("back");
            } else {
                req.flash("info", "Wrong Password Pattern!");
                return res.redirect("back");
            }
        } else {
            req.flash("info", "Wrong Password Pattern!");
            return res.status(401).send("Unauthorized!");
        }
    }
    catch (err) {
        req.flash("error", "Error Updating Profile!");
        console.log(err);
        return res.redirect("back");
    }
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
