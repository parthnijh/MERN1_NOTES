import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from "react-hot-toast"
const useSignup = () => {
    const {auth,setAuth}=useAuth();
    const signup=async (name,username,password,confirmPassword) => {
        try {
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                body:JSON.stringify({name,username,password,confirmPassword}),
                headers:{"Content-Type" : "application/json"},
                credentials: 'include'
            });
            if(!res.ok){
                console.log(res)
                throw new Error();
               
    
            }
            
            const data=await res.json();
            if (data.error){
                throw new Error("error in signup");
    
            }
            
            localStorage.setItem("user",JSON.stringify(data));
            setAuth(data);
    
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
            
        }
    }
    return {signup};
 
}

export default useSignup