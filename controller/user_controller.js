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
    //TODO LATER
}

module.exports.createSession = function(req,res){
    //TODO LATER
}