import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import router from './routes/url.js'
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongoose connection successful");
  app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
  });
}

app.use("/",router);

