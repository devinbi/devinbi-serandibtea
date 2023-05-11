const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const VehicleAllocationSchema = new Schema({
    Tea_Quantity :{
        type : Number,
        required : true,
        unique : true
    },

    Destination:{
        type : String,
        required:false
    },

    Distance:{
        type : Number,
        required:false
    },

    Suggested_vehicle:{
        type : String,
        required:false
    },

    Vehicle_reg_no:{
        type : String,
        required:false
    },

    Driver_name:{
        type : String,
        required:false
    },

    Fuel_type:{
        type : String,
        required:false
    },

    Date:{
        type : String,
        required:false
    }
   
})

const Allocation = mongoose.model("Allocation", VehicleAllocationSchema);
module.exports =Allocation;