const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'product'
  },
  adminId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "auth"
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "auth"
  },
  count : {
    type : Number,
    default : 1
  }
}, {
    versionkey : false,
    timestamps : true
});

const cartModel = mongoose.model("cart", cartSchema); 
module.exports = {
  cartModel
}

