const jwt = require('jsonwebtoken');
const {authModel} = require("../models/Auth.model");

const VerifyAdmin = async (req, res, next) =>{
    try {
        let token = req.headers.auth || false
        if(!token){
            return res.status(404).send({msg : "Sorry! you have to login first"});
        }
        let {_id} = jwt.verify(token, process.env.SKEY);
        let isAuth = await authModel.findOne({_id});
        if(!isAuth){
            return res.status(404).send({msg : "Sorry! you have to login first"});
        }
        if(isAuth.isAdmin){
            req.authId = _id;
            next();
        }else{
            return res.status(404).send({msg : "Sorry! you are not Admin"});
        }
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Verify Admin"});
    }
}

module.exports = {
    VerifyAdmin
}