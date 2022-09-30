const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect('mongodb://localhost:27017/blog2').then(()=>{
    console.log("connected to server")
}).catch((error)=>{
    console.log(error)
})

app.listen(3000,()=>{
    console.log("server is up")
})
