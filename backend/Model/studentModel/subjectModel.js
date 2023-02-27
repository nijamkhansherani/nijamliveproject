const mongoose = require('mongoose');
const studentsubject = new mongoose.Schema({
    subjectName:String
    
})

module.exports = mongoose.model('studentSubject',studentsubject);