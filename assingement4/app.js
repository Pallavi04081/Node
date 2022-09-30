const express = require('express')
const app = express()

app.use(express.json())

app.get('/add',(req,res)=>{

const Data  = req.body;

const num1 = Data.num1;
const num2 = Data.num2
if(num1<1000000 || num2<1000000){
    res.status(400).json({
        status:"failure",
        msg:"Data Underflow"
    })
}

if(num1>1000000 || num2>1000000){
    res.status(400).json({
        status:"failure",
        msg:"Data overflow"
    })
}


if(typeof(num1)==NaN || typeof(num2)==NaN){
    res.status(400).json({
        status:"failure",
        msg:"please Enter valid no"
    })
}

const sum = num1+num2;

res.status(200).json({
    status:'success',
    sum : sum
})

})

app.get('/sub',(req,res)=>{

    const Data  = req.body;
    
    const num1 = Data.num1;
    const num2 = Data.num2
    
    if(num1<-1000000 || num2<-1000000){
        res.status(400).json({
            status:"failure",
            msg:"Data Underflow"
        })
    }
    
    if(num1>1000000 || num2>1000000){
        res.status(400).json({
            status:"failure",
            msg:"Data overflow"
        })
    }
    
    
    if(typeof(num1)==NaN || typeof(num2)==NaN){
        res.status(400).json({
            status:"failure",
            msg:"please Enter valid no"
        })
    }

    const sum = num1-num2;
    res.status(200).json({
        status:'success',
        sum : sum
    })
    
    })


 app.get('/mul',(req,res)=>{

        const Data  = req.body;
        
        const num1 = Data.num1;
        const num2 = Data.num2


        if(num1<-1000000 || num2<-1000000){
            res.status(400).json({
                status:"failure",
                msg:"Data Underflow"
            })
        }
        
        if(num1>1000000 || num2>1000000){
            res.status(400).json({
                status:"failure",
                msg:"Data overflow"
            })
        }
        
        
        if(typeof(num1)==NaN || typeof(num2)==NaN){
            res.status(400).json({
                status:"failure",
                msg:"please Enter valid no"
            })
        
        }


        const sum = num1*num2;
        res.status(200).json({
            status:'success',
            sum : sum
        })
        
    })
    

app.get('/div',(req,res)=>{

const Data  = req.body;
            
 const num1 = Data.num1;
 const num2 = Data.num2

 if(num1<-1000000 || num2<-1000000){
    res.status(400).json({
        status:"failure",
        msg:"Data Underflow"
    })
}

if(num1>1000000 || num2>1000000){
    res.status(400).json({
        status:"failure",
        msg:"Data overflow"
    })
}


if(typeof(num1)==NaN || typeof(num2)==NaN){
    res.status(400).json({
        status:"failure",
        msg:"please Enter valid no"
    })
}


if(num2==0){
    res.status(400).json({
        status:"failure",
        msg:"Invalid value"
    })
}

            
 const sum = num1/num2;
 res.status(200).json({
  status:'success',
  sum : sum
 })
            
})
        













app.listen(3000,()=>{
    console.log('your server is up')})