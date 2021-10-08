const mongoose = require('mongoose')

const modeli = mongoose.Schema({
    Username:
    {
        type:String,
        required:true
    },
    FullName:
    {
        type:String,
        required:true
    },
    Address:
    {
        type:String,
        required:true
    },
    zip:
    {
        type:String,
        required:true
    },
    Country:
    {
        type:String,
        required:true
    },
    Password:
    {
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
role:{
type:String,
required:true
}
})
    const user = mongoose.model('user',modeli);

module.exports = user;
