const {productModel} = require("../models/Product.model");

const getAdminProduct = async (req, res) =>{
    try {
        let {page = 1} = req.query;
        let limit = 9;
        let adminId = req.adminId;
        let product = await productModel.find({adminId}).skip((page - 1) * limit).limit(limit);
        res.send(product);
    } catch (error) {
        return res.status(500).send({msg : "Somthing went wrong in Get Admin product"});
    }
}

module.exports = {
    getAdminProduct
}