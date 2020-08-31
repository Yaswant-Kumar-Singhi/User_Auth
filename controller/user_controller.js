//setting up user controller for login signup
module.exports.login = function(req,res){
    return res.render('login',{
        title: "Sign-In"
    })
}