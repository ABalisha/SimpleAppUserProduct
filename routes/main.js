const express = require('express')
const router = express();
const mainController = require('../controller/mainController')
router.get('/',mainController.allproducts)
router.get('/loginregister',(req,res)=>{
    if(process.env.loggedin === "false"){
        res.render('loginregister')
    }
    else{
        res.redirect('/products')
    }
    
})
module.exports = router;