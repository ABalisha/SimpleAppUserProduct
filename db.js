// Connecting to MONGODB DB
const mongoose = require('mongoose')
mongoose
.connect(process.env.db)
.then(res=> console.log("connected succ"))
.catch(err=> console.log(err))