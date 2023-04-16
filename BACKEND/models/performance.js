const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const performanceSchema = new Schema({
    
    employeeId:{
        type : String,
        required : true
    },

    name :{
        type : String,
        required : true
    },
    
    position: {
        type : String,
        required : true
    },

    attendanceCount: {
        type : Number,
        required : true
    },

    otCount: {
        type : Number,
        required : true
    }

})

const performance = mongoose.model("performance",performanceSchema);
module.exports = performance;