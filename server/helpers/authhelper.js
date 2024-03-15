const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");

module.exports.protectRoute = (req,res,next)=>{
   
   try{ let token;

    console.log(req.cookies.jwtoken);
    if(req.cookies.jwtoken){
        token = req.jwtoken;
        let payload  = jwt.verify(token,process.env.SECRET_KEY);
        if(payload){
        const user = User.findById(payload.payload);
        req.role = user.role;
        req._id = user._id;
        console.log(payload.payload);
    }
    else{
        return res.json({message:'User not verify'});
    }
}
    else{
        return res.json({message:'operation not allowed'});
    }
}
catch(e){
    
}

}

const  ensureToken = (req,res,next)=>{
    const bearerHeader = req.Headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearToken = bearer[1];
        req.cookies.jwtoken = bearToken;
        next();
    }
    else{
        res.sendStatus(402);
    }
}

 exports.checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
    
        req.cookies.jwtoken = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
 }