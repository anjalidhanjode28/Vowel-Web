const {cartModel} = require("../models/Cart.model")


const getCartProduct = async (req, res) =>{
    try {
        let userId = req.authId;
        let cartData = await cartModel.find({userId}).populate("productId");
        res.send(cartData)
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Get Cart Product"});
    }
}

module.exports = {
    getCartProduct
}