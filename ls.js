const fs = require('fs')
fs.readdir(process.argv[2],(err,data)=>{
    //console.log(data);
    data.forEach((str)=>{
        if(str.split('.')[1] == process.argv[3]){
            console.log(str);
        }
    })
})