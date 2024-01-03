import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import questionRoute from './route/Question.route.js' ;


// Configuration
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true }));


//Route
app.use("/api/question", questionRoute);

const port = process.env.PORT;

mongoose.set("strictQuery", false);

const connectMongo = ()  =>{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo!")
}

app.listen(port, () =>{
    connectMongo();
    console.log("Server is running or port: " + port)
}

)


