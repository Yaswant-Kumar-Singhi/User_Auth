const express = require('express')

const router = express.Router();

const home_controller = require('../controller/home_controller')

router.get('/',home_controller.home)

console.log('router is runing')

module.exports = router