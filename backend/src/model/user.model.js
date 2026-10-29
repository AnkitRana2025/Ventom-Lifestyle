import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique:true
  },
  username:{
    type:String,
    required:true
  },
  passwordHash:{
    type:String,
    required:true
  },
  role:{
    //seller or user
    type: String,
    default: "user",
    enum: ["user","seller"]
  },
  refreshToken:{
    type:String
  }
})

export const userModel = mongoose.model("users", userSchema);