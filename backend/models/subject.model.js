import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    topic_name : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        default : false
    }
});

const subjectSchema = new mongoose.Schema({
    subject_name : {
        type : String,
        required : true,
        trim : true
    },
    semester : {
        type : Number,
        required : true
    },
    batch : {
        type : "String",
        required : true
    },
    syllabus : {
        type : [topicSchema]
    }
});

module.exports = mongoose.model("Subject", subjectSchema);