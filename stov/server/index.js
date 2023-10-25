import express, { application }  from "express";
import mongoose from "mongoose";
import cors from 'cors';

//routers
import userRouter from './routes/users.js'

const app = express();


app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.use('/users',userRouter)

app.get('/',(req,res)=>{
    res.send(`stack overflow clone at port ${PORT}`);
})



const PORT  = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://admin:admin@stackoverflowclone.vowe39y.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,UseUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`server listening on port ${PORT}`)))
    .catch((err)=>{
    console.log(err)
})