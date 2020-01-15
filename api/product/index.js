const express = require('express');
const router = express.Router()

const {addProductLink} = require('./product.controller');

router.use('/addProduct',addProductLink);

module.exports = router;
