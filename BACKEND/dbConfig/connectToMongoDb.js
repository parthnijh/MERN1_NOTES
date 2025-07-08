import mongoose from "mongoose"

const connectToMongoDb=async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        
        console.log("mongo db connected")
        
        
        
    } 
    catch (error) {
        console.error(error.message)
        
    }
   

    
}

export default connectToMongoDb;