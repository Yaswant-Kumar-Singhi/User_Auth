//setting up user controller for signup
module.exports.signin = function(req,res){
    return res.render('sign-in',{
        title: "Sign-In",
        
    })
}

//setting up user controller for signup
module.exports.signup = function(req,res){
    return res.render('sign-up',{
        title: "Sign-Up"
    })
}