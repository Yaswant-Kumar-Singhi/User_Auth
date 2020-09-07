//requiring global files
const express = require('express');
const passport = require('passport');
const router = express.Router();

//requiring local files
const userController = require('../controller/user_controller')

//routing
router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/signup',userController.signup);
router.get('/signin',userController.signin);


//using router for creating a user
router.post('/create',userController.create);

//use passport as a middleware for auth
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect : '/user/signin'},
    
),userController.createSession)


//using router
router.get('/sign-out',userController.destroySession);

//update Password
router.post('/update',passport.checkAuthentication,userController.update)

//reset password after signin
router.post('/reset', passport.checkAuthentication,userController.resetPasswordAfterSignin)



// route for google authentication
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// callback for google authentication and create session
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/user/signin" }), userController.createSession);


//exporting router
module.exports = router;