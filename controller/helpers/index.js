
// helper functions 
const product = require('../../models/product')
const allproducts1 = (req,res)=>{
product.find()
.then(resu =>
{
return resu;

})
.catch(error=>
{
console.log(error);
return error
})
}
module.exports = {allproducts1};