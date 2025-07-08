import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast';
const useLogout = () => {
    const {auth,setAuth}=useAuth();
   const logout=async () => {
     try {
        const res=await fetch("/api/auth/logout",{
            method:"GET",
            headers:{"Content-Type" : "application/json"},
            credentials: 'include'
        })
        if(!res.ok){
            throw new Error("error in api calling");
        }
        const data=await res.json();
        if (data.error){
            throw new Error("error in signup");

        }
       

     } catch (error) {
        console.error(error.message);
        toast.error(error.message);
        
     }

    
   }
   return {logout};
  
}

export default useLogout;