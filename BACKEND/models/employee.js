const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    
    employeeId:{
        type : String,
        required : true
    },

    name :{
        type : String,
        required : true
    },
    
    nic: {
        type : String,
        required : true
    },

    birthdate: {
        type : Date,
        required : true
    },

    gender: {
        type : String,
        required : true
    },

    maritalStatus : {
        type : String,
        required : true
    },

    noOfChildren : {
        type : Number,
        required : true
    },

    title : {
         
        type : String,
        required : true
    },

    joiningDate : {

        type : Date,
        required : true
    },

    telNo : {
         type : Number,
         required : true
    }

    
})

const employee = mongoose.model("employee",empSchema);
module.exports = employee;