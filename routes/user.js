//requiring global files
const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controller/user_controller')
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

//exporting router
module.exports = router;