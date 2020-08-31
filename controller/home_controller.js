//setting up home controller for user
module.exports.home = function(req,res){
    return res.render('home',{
        title: "Home"
    })
}