import { User } from "../models/userModel.js"

//new user create in database
export const newUser = async function (req , res) {
    const {name , email , age , password , gender} = req.body

    try {
        if (!name || !email || !age || !password || !gender) {
            res.status(401)
            .json({
                message : "please fill all input Box"
            })
        }

        const existUser = await User.findOne({email})
        if (existUser) {
            res.status(401)
            .json({
                message : 'user already exist!'
            })
        }

        const user = await User.create(
            { 
                name : name,
                password : password,
                email : email,
                age : age,
                gender : gender
            }
        )
        console.log("user is : ",user)
        res.status(201)
        .json(user)    
    }
     catch (error) {
        console.log(`error occures at user controller new user `,error)
        res.status(401)
        .json({error : error.message})
    }
}

//get all users from database
export const getUsers = async function (req , res) {

    try {
        
        const users = await User.find()
        if (!users) {
            res.status({error : "not users found"})
            return
        }
        console.log('users are : ',users)
        res.status(201)
        .json(users)
    }
     catch (error) {
        console.log(`error occured at controller getUsers `,error)
        res.status(500)
        .json({message : 'internal server error at getUsers controller'})
    }
}

// get single user by id (use params to take value from url)
export const singleUser = async function (req , res) {

    const {id} = req.params //(params take value from url ,body take value from req object)

    try {
        
        const singleUser = await User.findById({_id : id})

        if (!singleUser) {
            console.log(`user not in database `)
            res.status(401)
            .json({message : 'user not found in database'})
            return
        }
        console.log('user is ',singleUser)
        res.status(201)
        .json(singleUser)

    } 
    catch (error) {
        console.log('error comes at single user controller ',error.message)
        res.status(500)
        .json({message : 'internal server error at single user controller'})
    }
}

// delete user by id
export const deleteUser = async function(req , res) {

    const {id} = req.params
    try {
        const deleteUser = await User.findByIdAndDelete({_id : id})

        if (!deleteUser) {
            console.log('user not found')
            res.status(401)
            .json({message : 'user not found in database'})
            return
        }

        console.log('user is ',deleteUser)
        res.status(201)
        .json(deleteUser)
    } 
    catch (error) {
        console.log('error comes at delete user controller ',error.message)
        res.status(500)
        .json({message : 'internal server error at delete user controller'})       
    }
}

// update user by use id
export const updateUser = async function(req , res) {

    const {id} = req.params
    const {name , age , email , password} = req.body

    try {
        const updatedUser = await User.findByIdAndUpdate(id , req.body , {new : true})

        if (!updatedUser) {
            console.log('user not found')
            res.status(401)
            .json({message : 'user not found'})
            return
        }

        console.log(`the new data after updation is `,updateUser)
        res.status(201)
        .json(updatedUser)

    } 
    catch (error) {
        console.log('error found in updated user controller ',error)
        res.status(500)
        .json({message : 'internal server error in updated user controller'})
    }
}

