const http = require('http')


http.createServer((req,res)=>{
    if(req.url=='/welcome'){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("Welcome to Dominos!")
        res.end()
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"Content-Type":"application/json"})
        const obj ={'phone': '18602100000',   'email': 'guestcaredominos@jublfood.com'}
        const Result = JSON.stringify(obj)
        res.write(Result);
        res.end()
    }
    else{
        res.write('page not found')
        res.end();
    }
}).listen(8081,()=>{
    console.log('server is up')
})



