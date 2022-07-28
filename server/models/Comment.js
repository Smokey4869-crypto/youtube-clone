import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    user_id: {
        type: String, 
        required: true
    },
    video_id: {
        type: String, 
        required: true,
    },
    desc: {
        type: String, 
        required: true
    }

}, {timestamps: true})

export const CommentModel = mongoose.model("Comment", CommentSchema)