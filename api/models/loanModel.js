const mongoose = require("mongoose");

const loanModel = new mongoose.Schema({
    loanId: {
        type: Number,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    netWeight:{
        type:String,
        required:true
    },
    grossWeight:{
        type:String,
        required:true
    },
    purity:{
        type:String,
        required:true
    },
    goldRate:{
        type:Number,
        required:true
    },
    image:{
        type:[String],
        required:true
    }
});

module.exports = mongoose.model("loanModel", loanModel);