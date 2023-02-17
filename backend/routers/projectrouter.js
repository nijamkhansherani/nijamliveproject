const express = require('express');
const app = express();
const Router = express.Router();
Router.use(express.json());

const {getproject,setproject,updateproject,deleteproject}=require('../controllers/projectcontrollers')
Router.get('/',getproject)
Router.post('/',setproject)
Router.put('/:_id',updateproject)
Router.delete('/:_id',deleteproject)


module.exports = Router;