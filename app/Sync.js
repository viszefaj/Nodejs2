const fs=require('fs');

let data;

data=fs.readFileSync('file2.txt','utf-8',function(data){

try {
    console.log(data);
    
} 
catch(error){

    console.log("Error oppening the file")
    console.log(error)
    
}

})



module.exports=data;