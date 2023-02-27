const mongoose = require('mongoose');
const projectscema = new mongoose.Schema({
    title:{
        type :String,
        required : [true, 'please add an title']
    },
    discripotion:
    {
        type :String,
        required : [true, 'please add an discripotion']    
    },
    price:{
        type :Number,
        required : [true, 'please add an price']    
    },
    quentity:{
        type :Number,
        required : [true, 'please add an quentity']    
    },
    images:{
        type:String,
        required : [true, 'please add an images']
    }
},
{
  timestamps : true
}
);

module.exports = mongoose.model('prodect',projectscema);
