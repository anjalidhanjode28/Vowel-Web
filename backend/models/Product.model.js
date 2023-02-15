const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
adminId : {
  type : mongoose.Schema.Types.ObjectId,
  ref : "auth"
},
 image : {
    type : String,
    required : true
 },
 title : {
    type : String,
    required : true
 },
 description : {
    type : String,
    required : true
 },
 price : {
    type : Number,
    required : true
 }
}, {
    versionkey : false,
    timestamps : true
});

const productModel = mongoose.model("product", productSchema);
module.exports = {
    productModel
}
