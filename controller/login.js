const user = require('../models/user')
const jwt = require('jsonwebtoken');
const { cookie } = require('request');

// This function acquires user and password and uses mongoose .find to match them to the database. 
// I havent encrypted the password since this is just a test but we can use bcrypt to encrypt the password
// If the credentials match we create a token for the user with JWT and save it on cookies
const LoginSearch = async (req,res)=>
{

        const username = req.body.Username;
        const password = req.body.Password;
        await user.find({Username:username,Password:password})
         .then(data => {
             if(data.length > 0){
                 if(data){
                    let dat = data[0].Username && data[0].role
                     jwt.sign(dat,process.env.secretkey,(err,token)=>{
                        if(err)
                        console.log(err);
                        else{
                            res.cookie('token',token)
                            process.env.loggedin = "true"
                            res.redirect("products")
                        }
                        
                 })
                }
    
            }
                 else
                 {
                     res.send('Problem logging in')
                 }
                }) 
         .catch(err=>console.log(err))
    }

module.exports = {LoginSearch:LoginSearch}