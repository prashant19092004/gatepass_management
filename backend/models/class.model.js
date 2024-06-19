import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    date : {
        type : Date,
        default : Date.now
    },
    hours: {
        type: Number,
        required: true, 
        min: 0, 
        max: 23
    },
    minutes: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 59
    },
    trainer_entry_hours: {
        type: Number,
        required: true, 
        min: 0, 
        max: 23
    },
    trainer_entry_minutes: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 59
    },
    trainer_exit_hours: {
        type: Number,
        required: true, 
        min: 0, 
        max: 23
    },
    trainer_exit_minutes: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 59
    },
    trainer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Trainer"
    },
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject"
    },
    class_topic : {
        type : String
    },
    feedback : {
        type : Number
    }
})

module.exports = mongoose.model("Class", classSchema);