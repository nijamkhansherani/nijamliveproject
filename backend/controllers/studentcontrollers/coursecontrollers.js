const { models } = require("mongoose")
const { route } = require("../../routers/studentrouters/courserouters")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../Model/studentModel/courseModel');
const protect = require("../../Middleware/Authmiddleware");
const { findById } = require("../../Model/userModel");

const setcourse = asyncHandler(async(req,res)=>{
    const { course } = req.body
    let data = await User.create({course:req.body.course}); 
    console.log("====>",data);
     res.status(200).json({data})

})

const getcourse = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const searchcourse = asyncHandler(async(req,res)=>{
    let data = await User.findById(req.params._id);
    res.status(200).json(data);
 })



module.exports = {
    setcourse,
    getcourse,
    searchcourse
    
}
