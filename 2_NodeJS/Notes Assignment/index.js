const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'Files');
const filePath = `${dirPath}/notes.txt`;

const input = process.argv; 

if(input[2]=="add"){
  fs.writeFileSync(filePath,input[3]);
}

// Write in file
if(input[2] == "remove"){
  fs.unlinkSync(`${dirPath}/notes.txt`);
}



// Read File
fs.readFile(filePath,'utf8',(err,fileContent)=>{
  if(err){
    console.log('Error reading file...');
    return;
  }
  else console.log(fileContent);
});


if(input[2] == 'append'){
  fs.appendFile(filePath,input[3],(err)=>{
    if(err){
      console.log('Unable to append in file');
      return;
    }
    else console.log(input[3]+" Appended in file");
  });
}





if(input[2] == 'rename'){
  fs.rename(filePath, `${dirPath}/${input[3]}`,(err)=>{
    if(err){
      console.log('Error renaming file...');
      return;
    }
    else console.log("File is renamed as"+input[3]);
  });
}


