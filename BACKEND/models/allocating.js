const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const allocatingSchema = new Schema({


    equipmentid : {
        type : String,
        required: true
    },
    department : {
        type : String,
        required: true
    },
    wattage: {
        type : Number,
        required: true
    },
    hours : {
        type : Number,
        required: true
    }
 


})

const allocating = mongoose.model("allocating",allocatingSchema);

module.exports = allocating;
