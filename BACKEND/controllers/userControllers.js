
import User from "../models/user.js"
import Notes from "../models/notes.js"
const getNotes=async (req,res) => {
    try {
        const id=req.user._id;
        const notes=await Notes.find({user:id}).sort({createdAt:-1})
        if(!notes){
            return res.status(400).json({error:error.message})
        }
        res.json(notes);
        
    } 
    catch (error) {
        res.status(400).json(error.message)
    }
    
    
}

const createNote=async (req,res) => {
    const id=req.user._id;
    try{
        const {title,description}=req.body;
        if(!title || !description){
            return res.status(400).json({error:"please enter a title or description"})
    
        }
        const newNotes=await Notes.create({title,description,user:id})
        if(newNotes){
            res.status(200).json(newNotes)
        }

    }
    catch(error){
        res.status(400).json(error.message)

    }
    
    
}



export {getNotes,createNote}