const fs = require('fs')
const http = require('http')

fs.writeFile('app.html','<h1>Hello world</h1>',(error)=>{
    console.log(error)
})

http.createServer((req,res)=>{
   
    fs.readFile('./app.html','utf-8',(error,data)=>{
        res.writeHead(200,{'content-type':"text/html"})
        res.write(data)
        res.end();
    })
      
}).listen(3000,()=>{
    console.log('server is up')
})


