const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const client = require('./model/client');
const {handlesignup,handlegetallData} = require('./controller/client');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 2000;

mongoose.connect('mongodb://127.0.0.1:27017/PP')
.then((res)=>console.log('DB connted !'))
.catch((err)=>console.log('err : ',err))

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())

app.use(cors({
   origin:'http://localhost:5173',
   credentials:true
}));

app.post('/',handlesignup)
app.get('/clients',handlegetallData)

app.listen(PORT,()=>{
    console.log('server started !')
})