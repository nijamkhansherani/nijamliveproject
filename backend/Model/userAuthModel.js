const mongoose = require('mongoose');
const studentAuthSchema = new mongoose.Schema({
    name:{
        type :String,
        required : [true, 'please add an name']
    },
    email:
    {
        type :String,
        required : [true, 'please add an email']    
    },
    password:{
        type :String,
        required : [true, 'please add an password']    
    },
    
},
{
    timestamps : true
 }
);

module.exports = mongoose.model('userAuth ',studentAuthSchema);