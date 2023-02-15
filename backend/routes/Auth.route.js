const authRoute = require("express").Router();
const {signup} = require("../controller/Signup.controller");
const {login} = require("../controller/Login.controller")
const { body } = require('express-validator');


authRoute.route("/signup").post([
    body('username', "Enter your username").not().isEmpty(),
    body('email', "Enter a vaild email").isEmail(),
    body('password', "Password length must be atleast 3").isLength({ min: 3 }),
], signup);



authRoute.route("/login").post([
    body('email', "Enter a vaild email").isEmail(),
    body('password', "Password length must be atleast 3").isLength({ min: 3 }),
], login)


module.exports = {
    authRoute
}