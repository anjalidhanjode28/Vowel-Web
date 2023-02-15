const { validationResult } = require('express-validator');
const {authModel} = require("../models/Auth.model");
const bcript = require("bcrypt");
const jwt = require('jsonwebtoken');

const login = async (req, res) =>{
 try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg : errors.array()[0].msg });
    }

    let {email, password} = req.body;

    let isAuth = await authModel.findOne({email});

    if(!isAuth){
        return res.status(404).send({msg : "Sorry! you have to signup first!"});
    }

    let checkPass = await bcript.compare(password, isAuth.password);

    if(!checkPass){
        return res.status(400).send({msg : "Wrong Credentials!"})
    }

    // create token 
    let token = await jwt.sign({_id : isAuth._id}, process.env.SKEY);

    res.send({msg : "Successfully Login!", token, isAdmin : isAuth.isAdmin, id : isAuth._id});
 } catch (error) {
    return res.status(500).send({msg : "Somthing went wrong in login"});
 }
}

module.exports = {
    login
}