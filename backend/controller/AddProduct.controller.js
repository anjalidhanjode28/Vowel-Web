const {productModel} = require("../models/Product.model")

const addProduct = async (req, res) =>{
    try {
        let adminId = req.authId;
        let {image, title, description, price} = req.body;
        await productModel.create({image, title, description, price, adminId});
        res.send({msg : "Product Added Successfully!"});
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Add Product"});
    }
}

module.exports = {
    addProduct
}