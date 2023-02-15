const {cartModel} = require("../models/Cart.model");
const {productModel} = require("../models/Product.model");

const addCart = async (req, res) =>{
    try {
        let userId = req.authId;
        let productId = req.params.productId;
        let product = await productModel.findOne({_id : productId});
        let adminId = product.adminId;
        await cartModel.create({userId, productId, adminId});
        res.send({msg : 'Product added successfully into the cart'});
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Add Cart"});
    }
}

module.exports = {
    addCart
}