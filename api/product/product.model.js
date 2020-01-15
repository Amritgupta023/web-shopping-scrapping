const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const ProductListSchema = new Schema({
  productName:String,
  productLink:String,
  currentPriceWhenAlertSet:Number,
  priceForAlert:Number,
  currentDiscountWhenAlertSet:Number,
  originalPriceWhenAlertSet:Number,
  date: Date
});

const ProductListModel = mongoose.model('ProductList',ProductListSchema);

module.exports  = ProductListModel;