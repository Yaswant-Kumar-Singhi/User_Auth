//requiring global files
const express = require('express');
const router = express.Router();

//requiring local files
const home_controller = require('../controller/home_controller')

//routing
router.get('/',home_controller.home)
router.use('/user',require('./user'));

//console msg
console.log('router is runing')

//exporting routess
module.exports = router