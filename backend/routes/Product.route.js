const productRouter = require("express").Router();
const {VerifyAdmin} = require("../middleware/VerifyAdmin");
const { body } = require('express-validator');
const {addProduct} = require("../controller/AddProduct.controller");
const {updateProduct} = require("../controller/UpdateProduct.controller");
const {deleteProduct} = require("../controller/DeleteProduct.controller");
const {getAllProduct} = require("../controller/GetAllProduct.controller");
const {getAdminProduct} = require("../controller/GetAdminProduct.controller");


productRouter.route("/add").post([
    body('image', "Enter image").not().isEmpty(),
    body('title', "Enter title").not().isEmpty(),
    body('description', "Enter description").not().isEmpty(),
    body('price', "Enter price").not().isEmpty(),
], VerifyAdmin, addProduct);

productRouter.route("/update/:productId").patch(VerifyAdmin, updateProduct);

productRouter.route("/delete/:productId").delete(VerifyAdmin, deleteProduct);

productRouter.route("/get/all").get(getAllProduct);

productRouter.route("/get/admin").get(VerifyAdmin, getAdminProduct)

module.exports = {
    productRouter
}