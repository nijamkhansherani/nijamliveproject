const express= require('express');
const { getwishlish, postwishlish } = require("../controllers/wishlishcontrollers");
const router = express.Router();
router.use(express.json())


router.get('/',getwishlish)    
router.post('/',postwishlish)


module.exports = router;