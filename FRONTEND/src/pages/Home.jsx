import React, { useEffect } from 'react'
import { useState} from 'react'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import { useAuth } from '../context/AuthContext'
const Home = () => {
    const [notes,setNotes]=useState([])
    const [newnotes,setNewNotes]=useState({title:"",description:""})
    const {logout}=useLogout();
    const{setAuth}=useAuth();
    const handleClick=async () => {
        await logout();
        setAuth(null)
    }
    useEffect(()=>{
        const fetchNotes=async () => {
            try {
                const res=await fetch("/api/user/notes",{
                    method:"GET",
                    credentials:"include"
                });
                if(!res.ok){
                    throw new Error("error in fetching notes");
                }
                const data=await res.json();
                if(data.error){
                    throw new Error("error in fetching notes data");
                };
                setNotes(data);
            } catch (error) {
                toast.error("error in fetching notes")
            }
        }
        fetchNotes()
    },[])
    
    const handleUpload=async () => {
        const res=await fetch("/api/user/upload",{
            method:"POST",
            credentials:"include",
            body:JSON.stringify(newnotes),
            headers:{"Content-Type" : "application/json"},
        });
        if(!res.ok){
            throw new Error("errorrrrrrrr");
        }
        const data=await res.json();
        setNotes(prev=>[...prev,data])
        setNewNotes({title:"",description:""});
    }

    return (
        <div className="min-h-screen bg-slate-900 text-yellow-400 p-6">
            <div className="max-w-2xl mx-auto text-center">
                <div className='flex w-full justify-center gap-5'>
                <h1 className="text-3xl font-bold mb-4">Your Notes</h1>
                <button
                    className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500"
                    onClick={handleClick}
                >
                    Logout
                </button>
                </div>
            
                {/* Notes List */}
                <div className="mt-6 space-y-4">
                    {notes && notes.map((note, index) => (
                        <div key={index} className="bg-yellow-500 text-black p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">{note.title}</h2>
                            <p className="mt-2">{note.description}</p>
                        </div>
                    ))}
                </div>

                {/* Upload New Note */}
                <div className="mt-10">
                    <h1 className="text-2xl font-bold mb-4">Upload New</h1>
                    <input
                        type="text"
                        placeholder="Enter title"
                        className="w-full p-2 mb-4 bg-gray-700 text-yellow-400 rounded-md"
                        value={newnotes.title}
                        onChange={(e) => setNewNotes(prev => ({ ...prev, title: e.target.value }))}
                    />
                    <input
                        type="text"
                        placeholder="Enter description"
                        className="w-full p-2 mb-4 bg-gray-700 text-yellow-400 rounded-md"
                        value={newnotes.description}
                        onChange={(e) => setNewNotes(prev => ({ ...prev, description: e.target.value }))}
                    />
                    <button
                        className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500"
                        onClick={handleUpload}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home