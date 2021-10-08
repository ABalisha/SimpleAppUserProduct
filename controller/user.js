
const user = require('../models/user')
let message = " ";
let resul =" ";
const userspage = async (req,res) =>
{
     await user.find()
    .then(data=>{
        resul = data
    })
    .catch(err=>{
        console.log(err)
    })
    console.log(resul)
    res.render('user',{message:message,resul:resul})
}
// Adding a user
const adduser = async (req,res,next) =>{ 
const checkmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if(!await user.findOne({"Username":req.body.Username}) && checkmail.test(req.body.Email) && req.body.Password.length > 10)
{
const newuser = await new user({
    Username:req.body.Username,
    FullName:req.body.FullName,
    email:req.body.Email,
    Address:req.body.Address,
    zip:req.body.zip,
    Country:req.body.Country,
    Password:req.body.Password,
    role:"user"
})
await newuser.save()
.then(resu=> {

    if(req.body.submit){ 
    message = "posted succesfully"
    res.render('../views/user',{message:message,resul:resul})
    message = " ";
    }
    else
    {
        message=" ";
    }
})
.catch(err => console.log(err))
}
else
{
    if(req.body.submit){ 
        message = "User already exists or information not supplied correctly"
        res.render('../views/user',{message:message,resul:resul})
        message = " ";
    }
}
message = ""
}
// Searching based on username
// Async

const SearchRes = async (req,res)=>
{
    resul = " "
    await user.findOne({"Username":req.body.Search})
     .then(data => {
         if(data){
         console.log(data)
         resul = data
         res.render('../views/user',{resul:resul,message:message})
        }
        else
        {
            resul = " No results "
            res.render('../views/user',{resul:resul,message:message})
            resul = "  "
        }
     })
     .catch(err=>console.log(err))
     

}

// Deleting a user based on username
const Delete = (req,res,next)=>{
    var va12 = `"`+req.params.DeleteParam+`"`
    user.findOneAndDelete({Username:va12})
    .then(resu =>{
        if(!resu){
            console.log('error deleting user...')
            res.send('error deleting user')
        }
        else{
        console.log("User deleted succesfully")
 res.send(`User ${req.params.DeleteParam} has been deleted successfully.`) 
        }  
})
    
    .catch(err => console.log(err))
}

module.exports = {adduser:adduser,SearchRes:SearchRes,Delete:Delete,userspage:userspage};