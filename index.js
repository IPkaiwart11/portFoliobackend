import express from 'express';
import mongoose from 'mongoose';
import userroute from './routes/User.js'
import cors from 'cors';

const app = express();

const connect = async()=>{
            try{
               await mongoose.connect(process.env.mongoDB);
               console.log('connected to mongodb');
            } catch(error){
               console.log("error is beta",error);
            }
            
}

mongoose.connection.on('disconnection',()=>{
               console.log('mongodb disconnected')
})
app.use(cors());
app.use(express.json());
app.use('/api/user',userroute);
app.listen(8800,()=>{
               connect();
       console.log('server is live')        
})

