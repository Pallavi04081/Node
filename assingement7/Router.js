const express = require('express')
const Router = express.Router()
const StudentDetails = require('./studentSchema');
const Studentid = require('./idSchema');

Router.get('/api/student',async(req,res)=>{
          try{
             const Result = await StudentDetails.find()
             res.status(200).json({
                Result
             })
          }
          catch(error){
                res.send(error.message)
          }
})

Router.get('/api/student.:id',async(req,res)=>{
    try{
       const Result = await StudentDetails.findById({_id:req.params.id})
       res.status(200).json({
          Result
       })
    }
    catch(error){
          res.send(error.message)
    }
})

Router.post('/api/student',async(req,res)=>{
    try{
       const studentid = await Studentid.find().sort({studentIdNo:-1}).limit(1)
       let idNo = studentid[0]. studentIdNo;
      
       const Result = await StudentDetails.create({
            id: idNo++,
            name: req.body.name,
            currentClass: req.body.class,
            division: req.body.division,
       })
       console.log(Result);
       await Studentid.create({
        studentIdNo:idNo++,
       })
       res.status(200).json({
         id :  Result.id
       })
    }
    catch(error){
          res.send(error.message)
    }
})


Router.put('/api/student/:id',async(req,res)=>{
    try{ 
       const Result = await StudentDetails.findOneAndUpdate({id:req.params.id},{
             id:req.params.id,
            name: req.body.name,
            currentClass: req.body.class,
            division: req.body.division,
       })
       res.status(200).json({
          Result
       })
    }
    catch(error){
          res.send(error.message)
    }
})


Router.delete('/api/student/:id',async(req,res)=>{
    try{ 
       const Result = await StudentDetails.findOneAndDelete({id:req.params.id})
       res.status(200).json({
          Result
       })
    }
    catch(error){
          res.send(error.message)
    }
})





module.exports = Router;