import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    user_id: {
        type: String, 
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    img: {
        type: String
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribed_users: {
        type: [String]
    }
}, {timestamps: true})

export const UserModel = mongoose.model("User", UserSchema)