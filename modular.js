const lsmod = require('./lsmodule.js')
var dir = process.argv[2]
var ext = process.argv[3]

lsmod(dir,ext,(err, data)=>{
    if(err){console.log(err)}
    data.forEach((element) => {
        console.log(element)
    });
})