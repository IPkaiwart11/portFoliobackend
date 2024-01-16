import express from 'express';
import user from '../models/user.js';

const router = express.Router();

router.post('/',async(req,res)=>{
               const newUser = new user(req.body);
               try{
                    const savedUser =await newUser.save();
                    res.status(200).json(savedUser);
               }catch(error){
                     throw error;        
               }
})

router.get('/',async(req,res)=>{
               try{
                  const users = await user.find();
                  res.status(200).json(users);
               }catch(error){
                              throw error;
               }
})

export default router;