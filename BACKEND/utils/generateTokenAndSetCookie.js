import jwt from "jsonwebtoken";
const generateTokenAndSetCookie=(userId,res)=>{
     // To ensure it's being set correctly

    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge:15 *24 *60 *60 *1000,
        httpOnly:true,//provide xss attacks cross site scripting attacks
        sameSite:"lax",
        secure:process.env.NODE_ENV!=="development",//CSRF attacks cross site request foregery attacks
    })
    console.log("cookie set")
}

export default generateTokenAndSetCookie;