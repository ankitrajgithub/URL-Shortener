import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();

const app=express();
const PORT=process.env.PORT;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongoose connection successful");
  app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
  });
}


app.get("/",(req,res)=>{
    
    res.json({
        msg:"Home page!!"
    })
});

