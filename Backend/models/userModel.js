import mongoose , {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
    name:
     { type: String, required: true },

    email:
     { type: String, required: true, unique: true },

    password: 
    { type: String, required: true }, // Ensure password is defined

    age: 
    { type: Number, required: true },

    gender: 
    { type: String, required: true },
    
    } , 
    {timestamps : true}
);

export const User = mongoose.model("User" , userSchema)