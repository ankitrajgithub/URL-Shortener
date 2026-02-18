import express from "express";
import Url from '../models/urlschema.js';
import {nanoid} from 'nanoid';

const router=express.Router();

router.post("/shorten",async (req,res)=>{
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
        let shortUrl;
        let exists=true;

        while(exists){
            shortUrl=nanoid(7);
            exists=await Url.findOne({shortUrl});
        }

        const url=await Url.create({
            originalUrl,
            shortUrl
        });
        res.json({
            shortUrl:url.shortUrl,
            url:`${process.env.BASE_URL}/${url.shortId}`
        })
    }catch(err){
        res.status(500).json({
            error:"Server error"
        })
    }
});

router.get(":/shortUrl",async (req,res)=>{
    try{
        const {shortUrl}=req.params;
        const url=await Url.findOne({shortUrl});
        if(!url){
            res.json(400).json({error:"URL not found."});
        }
        url.clicks+=1;
        await url.save();
        return res.redirect(url.originalUrl);
    }catch(error){
        res.status(500).json({error:"Server error"});
    }
});

export default router;