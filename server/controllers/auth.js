import mongoose from "mongoose"
import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import { createError } from "../error.js"
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    
    const generatedUserId = uuidv1()
    const hashedPassword = await bcrypt.hash(password, 10)
    
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        })

        if (user) {
            return res.status(409).send('User already exists. Please login or try with another email')
        } else {
            const sanitizedEmail = email.toLowerCase()
            const data = new UserModel({
                user_id: generatedUserId,
                email: sanitizedEmail,
                password: hashedPassword
            })

            await data.save()
            const newUser = await UserModel.findOne({
                email: req.body.email
            })

            res.status(201).send("User has been created")
        }
    } catch(err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "User not found"))

        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if (!checkPassword) return next(createError(400, "Wrong credentials"))

        const token = jwt.sign({ id: user.user_id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 24, })
        const { password, ...others } = user._doc

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others)

    } catch(err) {
        next(err)
    }
}