import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import users from "./routes/users.js"
import videos from "./routes/videos.js"
import comments from "./routes/comments.js"
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000
const URL = process.env.DATABASE_URL

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get('/api/users', users)
app.get('/api/comments', comments)
app.get('/api/videos', videos)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status: status,
        message: message,
    })
})

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log('err', err)
    });