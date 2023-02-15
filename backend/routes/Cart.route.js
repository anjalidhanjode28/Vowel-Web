const cartRouter = require('express').Router();
const {VerifyToken} = require("../middleware/VerifyToken");
const {addCart} = require("../controller/AddCart.controller")
const {deleteProductCart} = require("../controller/DeletecartProduct.controller");
const {getCartProduct} = require("../controller/GetCartProduct.controller");
const {updateCart} = require("../controller/UpdateCart.controller")

cartRouter.route("/add/:productId").post(VerifyToken, addCart);

cartRouter.route("/delete/:cartId").delete(VerifyToken, deleteProductCart);

cartRouter.route("/get").get(VerifyToken, getCartProduct);

cartRouter.route("/update/:cartId").put(VerifyToken, updateCart);


module.exports = {
    cartRouter
}