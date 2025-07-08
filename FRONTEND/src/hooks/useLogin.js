import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast';
const useLogin = () => {
    const {auth,setAuth}=useAuth();
   const login=async (username,password) => {
     try {
        const res=await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({username,password}),
            credentials: 'include'
        })
        if(!res.ok){
            throw new Error("error in api calling");
        }
        const data=await res.json();
        if (data.error){
            throw new Error("error in login");

        }
        localStorage.setItem("user",JSON.stringify(data))
        setAuth(data);

     } catch (error) {
        console.error(error.message);
        toast.error(error.message);
        
     }

    
   }
   return {login};
  
}

export default useLogin