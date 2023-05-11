const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const maintenanceSchema = new Schema({
    Vehicle_ID :{
        type : String,
        required : true,
        unique : true
    },

    Vehicle_Reg_NO:{
        type : String,
        required:true
    },
    
    Issue:{
        type : String,
        required:true
    },
    
    Status:{
        type : String,
        required:true
    },

    Description:{
        type : String,
        required:false
    },

    MaintainCost : {
        type : String,
        required:true
    },

    Date:{
        type : String,
        required:true
    }
   
})

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
module.exports =Maintenance;