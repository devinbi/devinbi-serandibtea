const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const vehicleSchema = new Schema({
    Vehicle_ID :{
        type : String,
        required : true,
        unique : true
    },

    Vehicle_Type:{
        type : String,
        required:true
    },
    
    Vehicle_Brand:{
        type : String,
        required:true
    },
    
    Vehicle_Model:{
        type : String,
        required:true
    },

    Vehicle_Registration_No :{
        type : String,
        required : true,
        unique : true
    },

    Current_Mileage:{
        type : String,
        required:false
    },

    Insurance_Type:{
        type : String,
        required:true
    },

    Insurance_Name:{
        type : String,
        required:true
    },

    Air_Condition:{
        type : String,
        required:true
    },

    Eco_Test_Issued_Date :{
        type: Date,
        required: true
    },

    Eco_Test_Expire_Date :{
        type: Date,
        required: true
    },
    
    Fuel_Type:{
        type : String,
        required:true
    },

    //Image_upload:{
        
    //},
    Vehicle_Owner:{
        type : String,
        required:true
    },
    
    Owner_Name:{
        type : String,
        required:false
    },

    NIC:{
        type : String,
        required:false
    },

    Address:{
        type : String,
        required:false
    },

    Contact_No:{
        type : Number,
        required:false
    },

    reminder_send_count:{
        type : Number,
        required:false
    },

    Date:{
        type : Date,
        required:false
    }
   
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports =Vehicle;