const {productModel} = require("../models/Product.model");

const getAllProduct = async (req, res) =>{
    try {
        let {page = 1} = req.query;
        let limit = 9;
        let product = await productModel.find().skip((page - 1) * limit).limit(limit);
        res.send(product);
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Get All Product"});
    }
}


module.exports = {
    getAllProduct
}