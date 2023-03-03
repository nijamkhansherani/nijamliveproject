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


 const updatecourse=asyncHandler( async (req,res)=>{
    let findid = await User.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        const updateusers = await User.findByIdAndUpdate(req.params._id,req.body,{
            new : true
        })
    
    console.log("=====>",updateusers);
    res.send(updateusers)
})

const deletecourse= asyncHandler( async(req,res)=>{
   
    let findid = await User.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        await findid.remove();

   
    res.status(200).json({message : `delete data ${req.params.id}`});
 })




module.exports = {
    setcourse,
    getcourse,
    searchcourse,
    updatecourse,
    deletecourse
    
}
