const { models } = require("mongoose")
const { route } = require("../../routers/studentrouters/countryrouters")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../Model/studentModel/countryModel');
const protect = require("../../Middleware/Authmiddleware");

const setcountry = asyncHandler(async(req,res)=>{
    const { countryCode, countryName, countrySchools } = req.body
    let data = await User.create({countryCode:req.body.countryCode,countryName:req.body.countryName,countrySchools:req.body.countrySchools}); 
    console.log("====>",data);
     res.status(200).json({data})

})

const getcountry = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const postcountry = asyncHandler(async(req,res)=>{
const { countryCode, countryName} = req.body
const data = await User.findOne({countryName})
JSON.stringify(data)
if(!data){
    res.status(404).json({error:"please valid data"})
}
console.log(data);
if(data.countryCode || data.countryName){
    res.status(201).json({
        countrySchools: data.countrySchools

    })
}
})


module.exports = {
    setcountry,
    getcountry,
    postcountry
    
}
