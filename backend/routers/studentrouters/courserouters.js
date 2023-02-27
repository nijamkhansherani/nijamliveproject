const express = require('express');
const { Model } = require('mongoose');
//const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const { setcourse, getcourse } = require('../../controllers/studentcontrollers/coursecontrollers')

router.post('/',setcourse);
router.get('/me',getcourse);

module.exports = router