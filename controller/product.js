const product = require('../models/product')
const helperProd = require('./helpers/index')
// FUNCTIONS FOR ALL PRODUCTS PATHS 
// Showing all products
const allproducts = async (req,res) =>
{
const results = await helperProd.allproducts
res.render('product',{results:results})
}
// Main Route
const mainroute = async (req,res)=>{
    
    res.json({message:'main route'})
}

// Add Product
const addProduct = async (req,res)=>{
    {
        let message = "";
if(!await product.findOne({"productTitle":req.body.Productname}))
{
        const productpost = await new product({
            productTitle: req.body.Productname,
            productPrize: req.body.ProductPrize
        })
        await productpost.save()
        .then(result => {
            console.log(result);
            
        })
        .catch(err => {
            console.log(err);
            res.send("error sending data")
            console.log(req.body.Productname,req.body.ProductPrize)
    
        })
        message = "This product was added succesfully";
        res.json({message:"Product added succesfully"})
    }
    else
    {
        res.json({message:"Product exists"})
    }
    
    }
}

// Remove Product
const removeProduct = async (req,res)=> {
    {
       await product.findByIdAndRemove(req.body.ID)
        .then(result => {
            console.log(result)
            res.send("Removed Succesfully");
            
        })
        .catch(errr => {
            console.log(errr)
            res.send('id not entered correctly')
        })
    }
}

// delete product based on productTitle
const delet = async (req,res)=>
{
await product.deleteOne({productTitle:req.params.ProductName})
        .then(data =>{
            console.log(data)
            console.log("Deleted Succesfully")
            res.send(helperProd.allproducts)
        })
        .catch(err=> {
            console.log(err)
        })
        const results = await helperProd.allproducts
        res.render('product',{results:results})
}
       
// Exporting Modules
module.exports = {delet,allproducts,mainroute,addProduct,removeProduct}