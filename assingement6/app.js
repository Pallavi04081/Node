const express = require('express')
const app = express();
const User = require('./blogSchema')
app.use(express.json());

app.get('/blog',async(req,res)=>{
       try{
          const qureyies = req.query; 
           const Result = await User.find({topic:qureyies.search},{},{limit:5,skip:(qureyies.page-1)*5})
          res.json({
         status:'suceess',
             Result:Result
          })
       }
       catch(error){
        console.log(error)
       }

})

app.post('/blog',async(req,res)=>{
     try{
         console.log(req.body)
       const Result  = await User.create({
        topic:req.body.topic,
       description:req.body.description,
       posted_by:req.body.posted_by
      })
       res.json({
         status:'success',
         Result:Result
       })
     }
     catch(error){
      console.log(error)
     }
})

app.put('/blog',async(req,res)=>{
    try{
        
       const id = req.params.id
      const Result  = await User.findByIdAndUpdate(_id,{
        topic:req.body.topic,
        description:req.body.description,
        posted_by:req.body.posted_by
      })
      res.json({
        status:'success',
        Result:Result
      })
    }
    catch(error){
     console.log(error)
    }
})

app.post('/blog/:id',async(req,res)=>{
    try{
      const _id = req.params.id
      const Result  = await User.findByIdAndDelete(_id)
      res.json({
        status:'success',
        Result:Result
      })
    }
    catch(error){
     console.log(error)
    }
})


module.exports = app;
