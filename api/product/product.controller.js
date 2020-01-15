const { RequestForProductName } = require('./product.services');
const ProductModel = require('./product.model');

const addProductLink = async (req,res)=>{
  try {
    let productToAdd = await RequestForProductName(req.body.productLink);

    productToAdd['currentPriceWhenAlertSet'] = productToAdd['currentPrice'];
    productToAdd['originalPriceWhenAlertSet'] = productToAdd['originalPrice'];
    productToAdd['currentDiscountWhenAlertSet'] = productToAdd['discount'];
    delete productToAdd['currentPrice'];
    delete productToAdd['originalPrice'];
    delete productToAdd['discount'];

    productToAdd['priceForAlert'] = +req.body.priceForAlert.replace(/[^1-9]/g,"");
    productToAdd['productLink'] = req.body.productLink;

    let productAdded = await new ProductModel(productToAdd).save()
    res.send(productAdded);

  } catch (error) {
    console.log("Error",error);
    throw error;
  }
}

module.exports = {addProductLink}