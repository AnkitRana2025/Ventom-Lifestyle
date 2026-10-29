import mongoose from "mongoose"
import { config } from "./config.js"

export const connectDB = async()=>{
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("database connected successfully");
    
  } 
  catch (error) {
    console.log("database not connected: ",error)
  }
    
}