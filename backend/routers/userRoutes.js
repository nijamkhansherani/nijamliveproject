const express = require('express');
const Router = express.Router();

Router.use(express.json())


   const {getuser,setUsers,updateuser,deleteuser}=require('../controllers/usercontrollers')
Router.get('/',getuser)
Router.post('/',setUsers)
Router.put('/:_id',updateuser)
Router.delete('/:_id',deleteuser)
// routes.use(express.json())

// Router.route('/').get(getuser).post(setUsers)
// Router.route('/:id').delete(deleteuser).put(updateuser)


module.exports = Router;