const express = require('express');
const { Model } = require('mongoose');
//const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const { setcountry , getcountry, postcountry} = require('../../controllers/studentcontrollers/countrycontrollers')

router.post('/',setcountry);
router.get('/me',getcountry);
router.post('/login',postcountry);

module.exports = router