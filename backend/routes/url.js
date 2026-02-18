import express from "express";
import Url from '../models/urlschema.js';
import {nanoid} from 'nanoid';

const router=express.Router();

router.post("/shorten",(req,res)=>{
    try{
        const {originalUrl}=req.body;
        if(!originalUrl){
            return res.status(400).json({error:"URL is required"});
        }
        try{
            new URL(originalUrl);
        }catch(error){
            return res.status(400).json({error:"Invalid URL"});
        }
    }catch(err){
        res.status(500).json({
            error:"Server error"
        })
    }
});