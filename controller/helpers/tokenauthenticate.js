const product = require('../../models/product')
const jwt = require('jsonwebtoken')
// Using JWT to verify the tokens 
// the verify takes 3 parameters, The token which is acquired by cookies, an enviroment variable and a callback function
// We also change the enviroment variable loggedin to true. 
const authenticateToken = async (req,res,next)=>
{
  let token = req.cookies.token
jwt.verify(token,process.env.secretkey,(err,user1)=>{
    if(err) return res.status(403).redirect('/loginregister');
    process.env.loggedin = "true"
    console.log(user1)
    console.log(process.env.loggedin)
    next();
})
}
module.exports = {authenticateToken:authenticateToken}