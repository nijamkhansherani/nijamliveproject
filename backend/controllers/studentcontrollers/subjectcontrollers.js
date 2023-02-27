const { models } = require("mongoose")
const { route } = require("../../routers/studentrouters/subjectrouters")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../Model/studentModel/subjectModel');
const protect = require("../../Middleware/Authmiddleware");

const setsubject = asyncHandler(async(req,res)=>{
    const { subjectName } = req.body
    let data = await User.create({subjectName:req.body.subjectName}); 
    console.log("====>",data);
     res.status(200).json({data})

})

const getsubject = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})


module.exports = {
    setsubject,
    getsubject
}
