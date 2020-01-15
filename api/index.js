const express = require('express');
const router = express.Router()

const productRouter = require('./product');

router.use('/product',productRouter);

module.exports = router;




// const request = require('request');
// const cheerio = require('cheerio');

// const ProductModel = require('./../models');

// router.post('/addProduct',async (req,res)=>{
//   try {
//     let productToAdd = await RequestForProductName(req.body.productLink);

//     productToAdd['currentPriceWhenAlertSet'] = productToAdd['currentPrice'];
//     productToAdd['originalPriceWhenAlertSet'] = productToAdd['originalPrice'];
//     productToAdd['currentDiscountWhenAlertSet'] = productToAdd['discount'];
//     delete productToAdd['currentPrice'];
//     delete productToAdd['originalPrice'];
//     delete productToAdd['discount'];

//     productToAdd['priceForAlert'] = +req.body.priceForAlert.replace(/[^1-9]/g,"");
//     productToAdd['productLink'] = req.body.productLink;

//     let productAdded = await new ProductModel(productToAdd).save()
//     res.send(productAdded);

//   } catch (error) {
//     console.log("Error",error);
//     throw error;
//   }

// });


// module.exports = router;

// function RequestForProductName(url){
//   return new Promise((resolve, reject) => {
//     request(url, (err, res, body) => {
//       if (err) reject(err);
//       if (body) {
//         let $ = cheerio.load(body);
//         let productName;
//         let currentPrice;
//         let discount

//         $('div._29OxBi > div > h1._9E25nV').each(function (index) {
//            productName = $(this).find('span._35KyD6').text();
//         });

//         $('div._29OxBi > div._3iZgFn > div._2i1QSc > div._1uv9Cb').each(function (index) {
//            currentPrice = +$(this).find('div._1vC4OE').text().replace(/[^1-9]/g,"");
//            originalPrice = +$(this).find('div._3auQ3N').text().replace(/[^1-9]/g,"") || currentPrice;
//            discount = +$(this).find('div.VGWI6T').text().replace(/[^1-9]/g,"") || 0;
//         });

//         resolve({productName,currentPrice,originalPrice,discount});
//       }
//     })
//   })
// }