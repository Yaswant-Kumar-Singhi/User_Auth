//requiring global files
const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller')

router.get('/signin',userController.signin)
router.get('/signup',userController.signup)
router.get('/profile',userController.profile)

//exporting router
module.exports=router;