const client = require("../model/client");

async function handlesignup(req,res){
    const {name,password,email,field} = req.body;
   const newClient = await client.create({
    name:name,
    password:password,
    field:field,
    email:email
    })
    console.log(newClient)
    return res.send(newClient)
}

async function handlegetallData(req,res){
   const clients = await client.find({})
   if(!clients) return res.send('No clients')
    console.log(clients)
    return res.send({clients:clients})
}

module.exports = {handlesignup,handlegetallData}