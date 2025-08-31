const client = require("../model/client");

async function handlesignup(req, res) {
  try {
    const { name, password, email, field } = req.body;
    const newClient = await client.create({ name, password, field, email });
    return res.send(newClient);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
}

async function handlegetallData(req,res){
   const clients = await client.find({})
   if(!clients) return res.send('No clients')
    console.log(clients)
    return res.send({clients:clients})
}

module.exports = {handlesignup,handlegetallData}