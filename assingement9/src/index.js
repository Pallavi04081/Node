const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect('mongodb://localhost:27017/Ecom').then(()=>{
    console.log("connecte to database")
}).catch((error)=>{
     console.log(error)
})

app.listen(3000,()=>{
    console.log('your server is up')
})



