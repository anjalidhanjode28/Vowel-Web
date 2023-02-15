const {cartModel} = require("../models/Cart.model")

const updateCart = async (req, res) =>{
    try {
       let cartId = req.params.cartId;
       let {q} = req.query;
       let cart = await cartModel.findOne({_id : cartId});
       if(q == 'inc'){
        await cartModel.findByIdAndUpdate({_id : cartId}, {count : cart.count + 1})
       }else{
        await cartModel.findByIdAndUpdate({_id : cartId}, {count : cart.count - 1})
       }
       res.send({msg : "cart update successfully!"})
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Update Cart Product"});
    }
}

module.exports = {
    updateCart
}