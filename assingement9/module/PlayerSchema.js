const mongoose = require('mongoose')

const userDetails = new mongoose.Schema({

    userName:{
        type:String
    },
    passward:{
         type:String
    },
     age:{
        type:Number
     },
     countary:{
        type:String
     },
     coins:{
         type:Number
     },
     gems:{
        type:Number
     },
     game_level:{
        type:Number
     },
     purchaser:Boolean
})

const UserData = mongoose.model("UserData",userDetails);

module.exports =  UserData;



