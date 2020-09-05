const passport = require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const crypto = require('crypto')


const User = require('../models/user')


passport.use(new googleStrategy({
        
        clientID : "341832961283-qt0hiooff3s19ohbm2lbo5ehitn9v7bq.apps.googleusercontent.com",
        clientSecret : "U9Jh5itm5Tzh82oZ1EvL2gyi",
        callbackURL: "http://localhost:8000/user/auth/google/callback"
},

    function (accessToken, refreshToken, profile, done) {
    // find a user
    User.findOne({ email: profile.emails[0].value }).exec(function (err, user) {
        if (err) {
            console.log("error in user Google Auth Strategy");
            // request.flash("error", "Internal Error In Google Auth");
            return done(err);
        }
        console.log(profile);
        // if found set the request as user
        if (user) {
            // console.log("Invalid username password");
            // request.flash("error","Invalid Username or Password!");
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
                console.log("User Created Hurrah!");
                return done(null, user);
            });
        }
    })
}

));

module.exports = passport;