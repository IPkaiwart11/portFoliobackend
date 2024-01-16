import mongoose  from "mongoose";

const Userschema =new mongoose.Schema({
        fullname:{
               type:String,
               required:true,
        },
        email:{
               type: String,
               required:true,
        },
        country:{
               type: String,
        }       
})

export default mongoose.model('user',Userschema);