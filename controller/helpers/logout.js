//Clear Cookies Logout callback function 
// It sets the token to 0 and clears them. 
// The login is token based 

const { cookie } = require('request');
const logout =  (req,res,next)=>
{
if(!cookie('token'))
{
    return res.json({message:"You are already logged out"})
}
else
{
// Destroying Session
res.cookie("token",0)
res.clearCookie('token')
process.env.loggedin = false
res.redirect('/')
}
console.log(process.env.loggedin)
}
module.exports= {logout:logout}