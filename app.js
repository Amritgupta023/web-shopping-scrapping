const express = require('express');
const app = express();
const bodyParser = require('body-parser')

require('./utils/mongoose');
const productListRoute = require('./api/index');
const {priceCompareCron} = require('./utils/crons/priceCompare.cron');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

priceCompareCron();


app.use('/',productListRoute);

app.listen(3000,()=>{
  console.log("The app is listing on the port 3000");
})













// const request = require('request');
// const cheerio = require('cheerio');
// const mongoose = require('fs');

// let url = [
//   'https://www.flipkart.com/dc-sneakers-men/p/itmf3yyeuuhp9sgk?pid=SHOEQKD6ZRWUFRNK&lid=LSTSHOEQKD6ZRWUFRNKAG1ALA&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3ASHOEZTT7HAECYR9Y%3Bpt%3Ahp%3Buid%3A6435de20-0a15-28a7-2133-49d915613aa9%3B.SHOEQKD6ZRWUFRNK.LSTSHOEQKD6ZRWUFRNKAG1ALA&ppt=hp&ppn=hp&ssid=gph726rqeo0000001579070209192&otracker=hp_reco_You%2BMay%2BLike_5_19.productCard.PMU_V2_DC%2BSneakers%2BFor%2BMen_SHOEQKD6ZRWUFRNK.LSTSHOEQKD6ZRWUFRNKAG1ALA_personalisedRecommendation%2Fp2p-same_4&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_You%2BMay%2BLike_DESKTOP_HORIZONTAL_productCard_cc_5_NA_view-all&cid=SHOEQKD6ZRWUFRNK.LSTSHOEQKD6ZRWUFRNKAG1ALA',
//   'https://www.flipkart.com/realme-c2-diamond-black-16-gb/p/itmb054642b201cf?pid=MOBFFMG3FGAFZYVE&lid=LSTMOBFFMG3FGAFZYVEIOD2CK&fm=neo%2Fmerchandising&iid=M_61007536-2a57-40a3-861d-f21e4ff56910_20.WUKT8UITDKQE&ppt=hp&ppn=hp&ssid=gph726rqeo0000001579070209192&otracker=hp_omu_Best%2BBattery%2BPhones_4_20.dealCard.OMU_WUKT8UITDKQE_16&otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2BBattery%2BPhones_NA_dealCard_cc_4_NA_view-all_16&cid=WUKT8UITDKQE',
//   'https://www.flipkart.com/maharaja-whiteline-mark-1-450-w-juicer-mixer-grinder/p/itmdzj8azfwgrqq9?pid=MIXDZJ8YFHZHXGAQ&lid=LSTMIXDZJ8YFHZHXGAQVW0BDV&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3AMIXFHF5P4XRWEVZB%3Bpt%3Ahp%3Buid%3A80beac3d-e7d6-ddf3-253b-86410f7fd0b6%3B.MIXDZJ8YFHZHXGAQ.LSTMIXDZJ8YFHZHXGAQVW0BDV&ppt=hp&ppn=hp&ssid=gph726rqeo0000001579070209192&otracker=hp_reco_More%2Bto%2BExplore_5_18.productCard.PMU_V2_Maharaja%2BWhiteline%2BMark-1%2B450%2BW%2BJuicer%2BMixer%2BGrinder_MIXDZJ8YFHZHXGAQ.LSTMIXDZJ8YFHZHXGAQVW0BDV_personalisedRecommendation%2Fp2p-same_4&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_More%2Bto%2BExplore_DESKTOP_HORIZONTAL_productCard_cc_5_NA_view-all&cid=MIXDZJ8YFHZHXGAQ.LSTMIXDZJ8YFHZHXGAQVW0BDV',
//   'https://www.flipkart.com/hp-15-6-inch-expandable-laptop-backpack/p/itmetzz27nrfxqg8?pid=LTBETZZ2DYZJHAUG&lid=LSTLTBETZZ2DYZJHAUGOFAX65&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3ALTBFFZ3VPZ3NSS8Y%3Bpt%3Ahp%3Buid%3A584b89d3-4303-3913-0bd9-5c0d2451222d%3B.LTBETZZ2DYZJHAUG.LSTLTBETZZ2DYZJHAUGOFAX65&ppt=hp&ppn=hp&ssid=gph726rqeo0000001579070209192&otracker=hp_reco_Recommended%2BItems_6_22.productCard.PMU_V2_HP%2B15.6%2Binch%2BExpandable%2BLaptop%2BBackpack_LTBETZZ2DYZJHAUG.LSTLTBETZZ2DYZJHAUGOFAX65_personalisedRecommendation%2Fp2p-same_5&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_Recommended%2BItems_DESKTOP_HORIZONTAL_productCard_cc_6_NA_view-all&cid=LTBETZZ2DYZJHAUG.LSTLTBETZZ2DYZJHAUGOFAX65',
//   'https://www.flipkart.com/apple-watch-series-5-gps-44-mm-space-grey-aluminium-case-black-sport-band/p/itm8b0b3d6c5b57d?pid=SMWFKFYZ5TPZ7DG2&lid=LSTSMWFKFYZ5TPZ7DG2NTIFMF&marketplace=FLIPKART&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_0_11_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_0_11_na_na_na&fm=SEARCH&iid=f8658372-2e60-46f5-9c3c-74091a821fdd.SMWFKFYZ5TPZ7DG2.SEARCH&ppt=sp&ppn=sp&ssid=43mfesaq8g0000001579077537941&qH=ac1abc0e63e8442c',
//   'https://www.flipkart.com/apple-watch-series-3-gps-42-mm-space-grey-aluminium-case-black-sport-band/p/itmf94ayxzefdyz7?pid=SMWF94AYMNYHTYDJ&lid=LSTSMWF94AYMNYHTYDJQFSI7R&marketplace=FLIPKART&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_0_11_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_0_11_na_na_na&fm=SEARCH&iid=707700e9-1795-4b06-8c9e-2745f2f10f61.SMWF94AYMNYHTYDJ.SEARCH&ppt=sp&ppn=sp&ssid=43mfesaq8g0000001579077537941&qH=ac1abc0e63e8442c',
//   'https://www.flipkart.com/nike-revolution-4-running-shoes-men/p/itmfg72wzvuztgsv?pid=SHOFG2HSM9HAMGXA&lid=LSTSHOFG2HSM9HAMGXAVWRSA1&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=16644ae1-2d97-444f-a603-60235672b1fc.SHOFG2HSM9HAMGXA.SEARCH&ppt=sp&ppn=sp&ssid=c4rmjj8yjk0000001579077612474&qH=2d7d99166bc4a50f',
//   'https://www.flipkart.com/nike-zoom-winflo-6-running-shoes-men/p/itmbf4aefb6e18b9?pid=SHOFK455CBBT6SWW&lid=LSTSHOFK455CBBT6SWW4LR0QO&marketplace=FLIPKART&srno=s_1_14&otracker=search&otracker1=search&fm=SEARCH&iid=94f3728e-b6c3-4386-ba3f-fc3f59408313.SHOFK455CBBT6SWW.SEARCH&ppt=sp&ppn=sp&qH=2d7d99166bc4a50f',
//   'https://www.flipkart.com/spacewood-engineered-wood-single-box-bed/p/itmf7bpy4j6dtk7g?pid=BDDF7AQRTRX9UDQC&lid=LSTBDDF7AQRTRX9UDQCQH2828&marketplace=FLIPKART&srno=b_1_1&otracker=hp_omu_Best%2BFurniture%2BCollection_5_10.dealCard.OMU_3GAPI5JY46OF_7&otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2BFurniture%2BCollection_NA_dealCard_cc_5_NA_view-all_7&fm=neo%2Fmerchandising&iid=c5b58fbf-6ae2-4c24-a30e-224032c9d622.BDDF7AQRTRX9UDQC.SEARCH&ppt=browse&ppn=browse&ssid=rzh3v0tigg0000001579080840287'
// ]
// let promises = [];

// for(let i=0;i<url.length;i++){
//   promises.push(RequestForProduct(url[i]));
// }

// Promise.all(promises)
// .then((res)=>{
//   console.log("res",res);
// })
// .catch((err)=>{
//   console.log(err);
// })


// function RequestForProduct(url){
//   return new Promise((resolve, reject) => {
//     request(url, (err, res, body) => {
//       if (err) reject(err);
//       if (body) {
//         let $ = cheerio.load(body);
//         // _1vC4OE _3qQ9m1
//         $('div._29OxBi > div._3iZgFn > div._2i1QSc > div._1uv9Cb').each(function (index) {
    
//           let currentPrice = $(this).find('div._1vC4OE').text();
//           // console.log("The currentPrice", currentPrice);
    
//           // _3auQ3N _1POkHg
//           let originalPrice = $(this).find('div._3auQ3N').text() || currentPrice;
//           // console.log("The original price", originalPrice);
    
//           let discount = $(this).find('div.VGWI6T').text() || 0;
//           // console.log("The discount will be:", discount);
    
//           resolve({currentPrice,originalPrice,discount});
//         });
//       }
//     })
//   })
// }

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
