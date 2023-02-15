const { validationResult } = require('express-validator');
const {authModel} = require("../models/Auth.model");
const bcript = require("bcrypt");
const salt = 6;

const signup = async (req, res) =>{
    try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg : errors.array()[0].msg });
    }
        let {username, email, password} = req.body;
        let isExists = await authModel.findOne({email});
        if(isExists){
            return res.status(400).send({msg : "you are already signup please login"});
        }

        let [user, admin] = email.split("@");

        let newPassword = await bcript.hash(password, salt);

        if(admin == "admin.com"){
            await authModel.create({username, email, password : newPassword, isAdmin : true})
        }else{
            await authModel.create({username, email, password : newPassword})
        }

        res.send({msg : "Signup Successfully!"});
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in signup"});
    }
}

module.exports = {
    signup
}