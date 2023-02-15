const {productModel} = require("../models/Product.model");

const updateProduct = async (req, res) =>{
    try {
        let productId = req.params.productId;
        await productModel.findByIdAndUpdate({id : productId}, req.body);
        res.send({msg : "Product update Successfully!"});
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Update Product"});
    }
}

module.exports = {
    updateProduct
}