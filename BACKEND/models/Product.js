const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const productSchema = new Schema({

    productId:{
        type : String,
        required: true
    },

    productName : {
        type : String,
        required: true
    },
    
    type : {
        type : String,
        required: true
    },
    quantity : {
        type : Number,
        required: true
    },
    weight: {
        type : Number,
        required: true
    },

    status: {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    }


})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
