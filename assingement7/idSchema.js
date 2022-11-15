const mongoose = require('mongoose')
const studentArray = require('./studentdetails')


const studentid = new mongoose.Schema({
    studentIdNo:Number
})


const Studentid = mongoose.model('Studentid',studentid)

if(Studentid.count<1){
    studentArray.forEach((element)=>{
        Studentid.create({
            studentIdNo:element.id
        })
        console.log(element)
    })}

module.exports = Studentid;