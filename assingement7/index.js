const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect('mongodb://localhost:27017/myapp').then(()=>{
console.log("connected to mongodb")
}).catch((error)=>{
 console.log(error)
})

app.listen(3000,()=>{
    console.log('server is up')
})