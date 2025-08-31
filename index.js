require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const client = require('./model/client');
const {handlesignup,handlegetallData} = require('./controller/client');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 2000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
.then((res)=>console.log('DB connted !'))
.catch((err)=>console.log('err : ',err))

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())

app.use(cors({
   origin:[
    'http://localhost:5173',
    'https://snazzy-custard-e23baa.netlify.app'
],
   credentials:true
}));

app.post('/',handlesignup)
app.get('/clients',handlegetallData)

app.listen(PORT,()=>{
    console.log('server started !')
})