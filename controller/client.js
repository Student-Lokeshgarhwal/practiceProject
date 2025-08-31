const { setClientAuth } = require("../authentication/auth");
const client = require("../model/client");

async function handlegetHome(req,res){
    if(req.client) {
        console.log("payload : ",req.client)
      const loginclient =await client.findOne({email:req.client.email})
      res.render('home',{
          loginClient:loginclient
        })
    }
}

async function handlesignup(req,res){
    const {name,password,email,field} = req.body;
   const newClient = await client.create({
    name:name,
    password:password,
    field:field,
    email:email
    })
    console.log(newClient)
    return res.redirect('/')
}

async function handlegetallData(req,res){
   const clients = await client.find({})
   if(!clients) return res.send('No clients')
    console.log(clients)
    return res.send({clients:clients})
}

async function handleLogin(req,res){
const {email, password} = req.body
const foundClient =  await client.findOne({email:email, password:password})
if(!foundClient) return res.render('login',{
    err:'email or password not correct!'
})
const token = setClientAuth(foundClient)
res.cookie('client',token)

    return res.redirect('/')
}


module.exports = {handlegetHome,handlesignup,handleLogin,handlegetallData}