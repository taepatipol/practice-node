var fs = require('fs');
fs.readFile(process.argv[2],(err, data)=> {
    let file = data.toString();
    console.log(file.split('\n').length-1);

});
// var file = fileBuf.toString();
// console.log(file.split('\n'));
// console.log(file.split('\n').length-1);