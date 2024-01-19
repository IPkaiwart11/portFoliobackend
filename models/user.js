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
        },
        message:{
              type:String,
              required:true,
        }       
})

export default mongoose.model('user',Userschema);