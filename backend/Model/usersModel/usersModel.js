const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{type :String},
    number:{type :String},
    email:{type :String},
    profile:{type:String},
    student:{type:String},
    employ:{type:String},
    product:{type:String}
},
{
    timestamps : true
 }
);

module.exports = mongoose.model('allstudent',studentSchema);