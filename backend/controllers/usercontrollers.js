const db = require('../config');
db();
const mongodb= require('mongodb');
const user = require('../Model/userModel')
const asyncHandler = require('express-async-handler');
const getuser=asyncHandler (async(req,res)=>{
    let data = await user.find();
    console.log("======>",data);
    res.status(200).json(data)
})

const setUsers= asyncHandler(async(req,res)=>{
    
    let data= await user.create({name:req.body.name ,email:req.body.email,password:req.body.password,number:req.body.number})
    console.log("====>",data);
    res.status(200).json(data)
})

const updateuser=asyncHandler( async (req,res)=>{
    let findid = await user.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    const updateusers = await user.findByIdAndUpdate(req.params._id,req.body,{
        new : true
    })
    console.log("=====>",updateusers);
    // let data = await db();
    // let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
    // res.status(200).json({result})
    res.status(200).json({message : `updatedata ${req.params._id}`})
})

const deleteuser= asyncHandler( async(req,res)=>{
   
    let findid = await user.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    await findid.remove();
   
    res.status(200).json({message : `delete data ${req.params.id}`});
 })

module.exports={
    getuser,
    setUsers,
    updateuser,
    deleteuser

}