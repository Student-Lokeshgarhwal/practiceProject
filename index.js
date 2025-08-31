const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const client = require('./model/client');
const {handlegetHome,handlesignup,handleLogin,handlegetallData} = require('./controller/client');
const path = require('path');
const cookieParser = require('cookie-parser');
const { authCheck, authorizationCheck } = require('./middleware/authCheck');

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
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',handlegetHome)
app.post('/',handlesignup)
app.get('/clients',handlegetallData)
app.post('/user',handleLogin)

app.listen(PORT,()=>{
    console.log('server started !')
})