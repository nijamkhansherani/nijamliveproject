const db = require('../config');
db();
const mongodb= require('mongodb');
const project = require('../Model/prodectModel')
const asyncHandler = require('express-async-handler');


const getproject = asyncHandler (async(req,res)=>{
    let data = await project.find();
    console.log("======>",data);
    res.status(200).json(data)
})

const setproject= asyncHandler(async(req,res)=>{
    const { title , discripotion , price , quentity} = req.body;
if(!title && !discripotion && !price && !quentity){
    res.status(400).json({message: "please add a all fileds"})
}
    let data= await project.create({title:req.body.title ,discripotion:req.body.discripotion,price:req.body.price,quentity:req.body.quentity})
    console.log("====>",data);
    res.status(200).json(data)
})

const updateproject = asyncHandler( async (req,res)=>{
    let findid = await project.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    const updateusers = await project.findByIdAndUpdate(req.params._id,req.body,{
        new : true
    })
    console.log("=====>",updateusers);
    
    res.status(200).json({message : `updatedata ${req.params._id}`})
})

const deleteproject= asyncHandler( async(req,res)=>{
   
    let findid = await project.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    await findid.remove();
    
    res.status(200).json({message : `delete data ${req.params.id}`});
 })

module.exports={
    getproject,
    setproject,
    updateproject,
    deleteproject

}