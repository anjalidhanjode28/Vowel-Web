const {productModel} = require("../models/Product.model");

const deleteProduct = async (req, res) =>{
    try {
        let productId = req.params.productId;
        await productModel.findByIdAndDelete({id : productId});
        res.send({msg : "Product Deleted Successfully!"});
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Delete Product"});
    }
}

module.exports = {
    deleteProduct
}