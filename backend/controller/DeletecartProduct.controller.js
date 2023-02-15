const {cartModel} = require("../models/Cart.model")

const deleteProductCart = async (req, res) =>{
    try {
        let cartId = req.params.cartId;
        await cartModel.findByIdAndDelete({_id : cartId});
        res.send({msg : "Product deleted successfully into the cart"})
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Delete Cart Product"});
    }
}

module.exports = {
    deleteProductCart
}