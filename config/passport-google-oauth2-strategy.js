const passport = require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const crypto = require('crypto')
const newUserMailer = require('../mailer/welcomeUser_mailer')


const User = require('../models/user')

//google credentials setup for google-oauth
passport.use(new googleStrategy({
        
    clientID : "31244521",
    clientSecret : "U9Jasdq",
    callbackURL: "http://localhost:8000/user/auth/google/callback"
},

    function (accessToken, refreshToken, profile, done) {
    // find a user
    User.findOne({ email: profile.emails[0].value }).exec(function (err, user) {
        if (err) {
            console.log("error in user Google Auth Strategy");
            
            return done(err);
        }
        console.log(profile);
        // if found set the request as user
        if (user) {
            
            newUserMailer.newUser(user)
            return done(null, user);
        }
        else {
            // if not found create a user and set request.user
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString("hex"),
                
            }, function (err, user) {
                if (err) {
                    console.log("error in creating user");
                    return done(err);
                }
                newUserMailer.newUser(user)
                console.log("User Created Hurrah!");
                return done(null, user);
            });
        }
    })
}

));

module.exports = passport;