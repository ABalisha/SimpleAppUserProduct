const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {

    productTitle: {
        type:String,
        required:true
    },
    productPrize: {
        type:String,
        required:true
    }

})

const Product = mongoose.model('Product', schema);

module.exports = Product;
