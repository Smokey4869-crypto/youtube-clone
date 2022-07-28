import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    img_url: {
        type: String, 
        required: true
    }, 
    video_url: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    }
    
}, {timestamps: true})

export const VideoModel = mongoose.model("Video", VideoSchema)