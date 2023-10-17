import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: String,
    email: String
})

export const Model = mongoose.model('User', userSchema)