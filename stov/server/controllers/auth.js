import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

 const signup = async (req,res)=>{
    const {name,email,password} = req.body
    try{
        const isUser = await users.findOne({email})
        if(isUser){
            res.status(500).json({message:"user already exists"})
        }
        const hashedPassword =  bcrypt.hash(password)
        const newUser = users.create({name,email,password:hashedPassword})
        const token = jwt.sign({email: newUser.email, id: newUser._id} , "test", {expiresIn:'1h'})
        res.status(200).json({result: newUser, token})
    }
    catch(error){
        res.status(500).json(error)
    }

}

 const login = async (req,res)=>{
    const {email,password} = req.body
    try{
        const User = await users.findOne({email})
        if(User){
            const isAuthorised = await bcrypt.compare(password,User.password)
            if(isAuthorised){
                const token = jwt.sign({email: User.email, id: User._id} , "test", {expiresIn:'1h'})
                res.status(200).json({result: User, token})
            }
            else{
                return res.status(401).json({message:"invalid credentials"})
            }
        }
        else{
            res.status(404).json({message:"user not found"})
        }


    }catch(err){
        res.status(500).json(error)
    }

}

export {
    login,
    signup
}