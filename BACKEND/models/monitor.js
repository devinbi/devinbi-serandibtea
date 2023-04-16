const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const monitorschema = new Schema({


    monitorid : {
        type : String,
        required: true
    },
    runtime : {
        type : Number,
        required: true
    },
    productiontime: {
        type : Number,
        required: true
    },
    availability : {
        type : Number,
        required: true
    }
    ,
    goodcount : {
        type : Number,
        required: true
    },

    totalcount : {
        type : Number,
        required: true
    }
    ,
    quality : {
        type : Number,
        required: true
    }
    ,
    idealcycle : {
        type : Number,
        required: true
    }
    ,
    count : {
        type : Number,
        required: true
    }
    ,
    rtime : {
        type : Number,
        required: true
    }
    ,
    performance : {
        type : Number,
        required: true
    },

    availability1 : {
        type : Number,
        required: true
    }
    ,
    performance1 : {
        type : Number,
        required: true
    }
    ,
    quality1 : {
        type : Number,
        required: true
    }
    ,
    oee : {
        type : Number,
        required: true
    }
    ,
    status : {
        type : String,
        required: true
    }

 


})

const monitor = mongoose.model("monitor",monitorschema);

module.exports = monitor;
