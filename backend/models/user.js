const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
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
    gender:{
        type:String , 
        enum:["Male","Female"]
    },
    admission_no:{
        type: String,
    },
    birth_date: {
        type: String
    },
    mob: {
        type: Number
    },
    room_no: {
        type: String
    },
    department: {
        type: String
    },
    parents_mob: {
        type : Number
    },
    requests : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Request"
    }

 })

 module.exports = mongoose.model("User",userSchema)