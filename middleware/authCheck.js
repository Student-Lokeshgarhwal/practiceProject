const { getClientAuth } = require("../authentication/auth")
const client = require("../model/client")

 function authCheck(req,res,next) {
    const token = req.cookies?.client
    console.log(token)
    if(!token) {    
        req.client = null
        return res.redirect('/login')
    }
   const payload = getClientAuth(token)
   console.log(payload)
   req.client = payload;
   return next()
}

 function authorizationCheck(fields) {
    return function(req,res,next){
    if(!req.client) return res.redirect('/login')
        // const {email,field} = req.client;
    // const isauthorizedClient = client.findOne({email:email})
    // console.log(isauthorizedClient.email)
    if(fields!=req.client.field){
        return res.redirect('/unauthorized')
    }
    return next();
}
}

module.exports= {authCheck,authorizationCheck}