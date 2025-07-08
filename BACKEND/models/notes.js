import mongoose from "mongoose";
const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    description:{
        type:String,
        
    }

},{timestamps:true})

const Notes=mongoose.model("Notes",notesSchema)
export default Notes;