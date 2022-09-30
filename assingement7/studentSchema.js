const mongoose = require('mongoose')
const studentArray = require('./studentdetails')

const studentDetails = new mongoose.Schema({
    id:{
       type :  Number,
       required: true
    },
    name: {
       type : String,
       required : true
    },
    currentClass:{
        type : Number,
        required: true
    },
    division:  {
        type:String,
        required:true
    }

    
})


const StudentDetails = mongoose.model('StudentDetail',studentDetails)
const count=0;

if(StudentDetails.count<1){
    count++
studentArray.forEach((element)=>{
    StudentDetails.create(element)
})}



module.exports = StudentDetails;