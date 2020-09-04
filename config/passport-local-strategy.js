//requiring global files
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//requiring user model 
const User = require('../models/user');

//auth using passport
passport.use(new LocalStrategy({
        usernameField : 'email'
    },
    function(email,password,done){
        //find the user and establish identity
        User.findOne({email : email},function(err,user){
            if(err) { console.log("error in finding the user ----> passport"); return done(err);}
            
            if(!user || user.password != password) {
                console.log("invalid username password");
                return done(null,false);
            }

            return done(null,user);
            
        });
    }
    
));

//serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});


//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err) {
            console.log("error in finding the user ----> passport"); return done(err);
        }

        return done(null,user);
    });
});

passport.checkAuthentication = function (req,res,next) {
    //if the user is signed in, then pass on the request to the next function
    if(req.isAuthenticated()){
        return next();
    }

    //if the user is not authenticated
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current user signed from cookies and sending it to views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;
