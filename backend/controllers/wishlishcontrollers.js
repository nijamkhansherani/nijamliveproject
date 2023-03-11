
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const wishlish = require('../Model/wishlishModel');
const asyncHandler = require('express-async-handler');



const getwishlish = async (req, res) => {
    let data = await wishlish.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
}



const postwishlish = async (req, res) => {

    const { title, dis, price, reting,img,color,size, liteimage } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !liteimage ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await wishlish.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        liteimage
    });
    console.log("====>", data);
    res.status(200).json(data)
}



module.exports = {
    getwishlish, postwishlish
}