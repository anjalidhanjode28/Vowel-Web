const jwt = require('jsonwebtoken');

const VerifyToken = async (req, res, next) =>{
    try {
        let token = req.headers.auth || false
        if(!token){
            return res.status(404).send({msg : "Sorry! you have to login first"});
        }
        let decode = jwt.verify(token, process.env.SKEY);
          if(!decode){
            return res.status(404).send({msg : "Sorry! you have to login first"});
          }
        req.authId = decode._id;
        next();
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Verify Token"});
    }
}


module.exports = {
    VerifyToken
}