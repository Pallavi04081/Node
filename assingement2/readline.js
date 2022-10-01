
const readLine = require('readline');

const Result = readLine.createInterface(process.stdin,process.stdout)

Result.question("Enter your name",(answer)=>{
    console.log("Hello"+" "+answer)
})


