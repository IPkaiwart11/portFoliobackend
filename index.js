

import express from 'express';
import mongoose from 'mongoose';
import userroute from './routes/User.js'
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

const connect = async () => {
   try {
     await mongoose.connect(process.env.mongoDB);
     console.log('Connected to MongoDB');
   } catch (error) {
     console.error('Error connecting to MongoDB:', error.message);
   }
 };
 console.log('MongoDB Connection String:', process.env.mongoDB);

mongoose.connection.on('disconnection',()=>{
               console.log('mongodb disconnected')
})

app.use(cors({
  origin: 'https://ip-kaiwart.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// app.use(cors({ origin: 'https://subtle-daffodil-96d4d0.netlify.app' }));
app.use(express.json());
app.use('/api/user',userroute);

const PORT = process.env.PORT || 8800;

app.listen(PORT,()=>{
               connect();
       console.log('server is live')        
})

