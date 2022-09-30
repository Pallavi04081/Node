const mongoose = require('mongoose');

const user = new mongoose.Schema({
     topic:{
        type:String,
        required:true
     },
     description:{
        type:String
     },
     posted_by:{
        type:String
     }    

     
},{timestamps:true})


const User = mongoose.model("User",user)

module.exports = User