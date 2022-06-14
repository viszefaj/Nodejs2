const fs=require('fs')

console.log("File is loading ");


var dt=fs.readFile('file.txt','utf8', async function(error,content){

    if(error){
        console.log("Error opening the file");
        return;
    }

    console.log(content);

})

module.exports=dt