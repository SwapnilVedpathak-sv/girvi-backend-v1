const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type:String,
        unique: true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    aadhar:{
        type:String,
        unique:true,
        required:true
    },
    pan:{
        type:String,
        unique:true,
        required:true
    }
});

module.exports = mongoose.model("userModel", userModel);