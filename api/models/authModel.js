const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("users", users);