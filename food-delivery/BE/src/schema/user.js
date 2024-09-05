import { Schema, model } from "mongoose";

const userSchema = new Schema({
name:{
    type: String,
   required :  [true ,"Name is requred"],
  },
 
  email: {
    type: String,
   required :  [true ,"email is requred"],
   minleght : [12, "Please enter a valid email"],
   maxleght : [50, "Please enter a valid email"],
  },
  password: {
    type: String,
   required :  [true ,"Passwoard is requred"],
  },
  phoneNumber: {
    type: String,
   required :  [true ,"Phonenumber is requred"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const userModel = model("user", userSchema);