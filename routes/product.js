const express = require('express')
const router = express();
const path = require('path')
const {mainroute,allproducts,addProduct,removeProduct,delet} = require('../controller/product')
const {allproducts1} = require('../controller/helpers/index')
const product = require('../models/product')
require('dotenv/config')
//ROUTES add product get
router.get('/', mainroute);
router.get('/all-products', allproducts)
router.get('/all-products/json', allproducts1)
// Post route to add product
router.post('/add-product',addProduct)
// Remove a product based on ID
router.post('/remove', removeProduct)
router.get('/delet/:ProductName', delet)
module.exports = router;
