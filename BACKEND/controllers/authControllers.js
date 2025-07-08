import User from "../models/user.js";
import bcryptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
export const login=async (req,res) => {
   try {
    const {username,password}=req.body
    const user=await User.findOne({username})
    if(!user){
        return res.status(404).json({error:"no such user exists"})
    }
    if(!(await bcryptjs.compare(password,user.password))){
        return res.status(400).json({error:"Invalid credentials"})
    }
    generateTokenAndSetCookie(user._id,res)
     res.status(200).json({name:user.name,username:user.username})
   
    
   } catch (error) {
    res.status(400).json({error:"error logging in"})
    
   }
    
}
export const signup=async (req,res) => {
    try {
        const {name,username,password,confirmPassword}=req.body;
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        if(password!==confirmPassword){
            return res.status(400).json({error:"wrong password"})
        }
        const token=await bcryptjs.genSalt(10);
        const hashedPass=await bcryptjs.hash(password,token)
        const newUser= await User.create({name,username,password:hashedPass})
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
           res.status(200).json(newUser)

        }
        
    } 
    catch (error) {
        res.status(400).json(error.message)
        
    }
   

    
}
export const logout=async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out sucessfuly"})
    } catch (error) {
        console.log("error in logging out");
        res.status(500).json({error:"internal server error"});
        
    }

    
}
