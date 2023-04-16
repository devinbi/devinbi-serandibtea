const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const supplierSchema = new Schema({


    supplierid : {
        type : String,
        required: true
    },
    suppliername : {
        type : String,
        required: true
    },
    weight: {
        type : Number,
        required: true
    },
    moisture_content : {
        type : Number,
        required: true
    },
    ripe_tea_leaves : {
        type : Number,
        required: true
    },
    net_weight : {
        type : Number,
        required: true
    },

 


})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;
