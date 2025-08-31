const jwt = require('jsonwebtoken')
const screteKey = '1111'

 const setClientAuth = (client)=>{
    return jwt.sign({
        id:client._id,
        email:client.email,
        field:client.field,
    },screteKey)
}

const getClientAuth = (token)=>{
    console.log("token from getClientAuth : ",token)
    if(!token) return null
   return jwt.verify(token,screteKey)
}

module.exports = {setClientAuth,getClientAuth}