const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        enum:["Pending","Approved","Reject"]
    },
    purpose: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    response_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
})

module.exports = mongoose.Model("Request", requestSchema);