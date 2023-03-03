const employs = require('../Model/employModel/employModel');
 const pro = require("../Model/productModel/productModel")

const allapi = async (req, res) => {
  let emp = await employs.find({})
  let product = await pro.find({})

  const arr = [
    emp={
       Image:"https://wallpaperaccess.com/full/4322025.jpg",
       name:"employe",
       data:emp
    },
        product={
            Image:"https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
            name:"product",
            data:product
        }
     
  ]

  res.status(200).json(arr)

}



module.exports = { allapi }