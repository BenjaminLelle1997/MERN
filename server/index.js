import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';


//setup Express and MongoDb
const app=express();

//limit image, JSON not grater than 20mb
//everthing go throw as string
app.use(bodyParser.json({limit: "20mb",extended: true})); 
app.use(bodyParser.urlencoded({limit: "20mb",extended: true})); 
//limit image, JSON not grater than 20mb

//everthing go throw as string
app.use(cors());

app.use('/students',studentRoutes); //path after localhost:5000 , functions


const CONNECTION_URL = 'mongodb+srv://bendzsi:bendzsi@cluster0.dcgcp.mongodb.net/schoolsystem?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; //choose 3000 or 5000

// connect to Mongo
// avoid warnings and errors

/************older version

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, useUnifiedTopology:true
 
}).then(() => 
   app.listen(PORT, () =>
    console.log(`Connection is established and runnig on port: ${PORT}`) 
    )).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false); //if it's successful to connect 

*****************/

mongoose.connect(CONNECTION_URL).then(() => 
   app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`) 
    )).catch((err) => console.log(err.message));





