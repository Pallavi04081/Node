const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	try{
        await fs.writeFile(fileName,fileContent,(error)=>{
            console.log(error)
        })
    }
    catch(error){
        console.log(error)
    }
}

const myFileReader = async(fileName) => {
    try{
     const Data =  await fs.readFile(fileName,'utf-8')
     console.log(Data)

    }catch(error){
        console.log(error)
    } 
 }

 const myFileUpdater = async (fileName, fileContent) => {
	try{
        await fs.appendFile(fileName,fileContent,(error)=>{
            console.log(error)
        })
    }
    catch(error){
         console.log(error)
    }
}

const myFileDeleter = async (fileName) => {
	try{
         await fs.unlink(fileName)
    }
    catch(error){
       console.log(error)
    }
}

const fileName = "File.txt"
const fileContent = "hello"
const modifiedContent = "world"

myFileWriter(fileName,fileContent);
myFileReader(fileName);
myFileUpdater(fileName,modifiedContent);
myFileDeleter(fileName);


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }