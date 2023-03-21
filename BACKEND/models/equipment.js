const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({

    equipmentid:{
        type : String,
        required: true
    },

    equipmentname : {
        type : String,
        required: true
    },
    
    equipmenttype : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    department: {
        type : String,
        required: true
    },

    intertek: {
        type : Number,
        required: true
    },
     
    status : {
        type : String,
        required: true
    }


})

const equipment = mongoose.model("equipment",equipmentSchema);

module.exports = equipment;
