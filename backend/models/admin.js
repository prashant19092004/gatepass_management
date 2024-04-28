const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    mob: {
        type: Number
    },
    position: {
        type: String
    },
    responses : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Request"
    }

 })

 module.exports = mongoose.model("Admin",adminSchema)