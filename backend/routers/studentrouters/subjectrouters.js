const express = require('express');
const { Model } = require('mongoose');
//const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const { setsubject, getsubject} = require('../../controllers/studentcontrollers/subjectcontrollers')

router.post('/',setsubject);
router.get('/me',getsubject);

module.exports = router