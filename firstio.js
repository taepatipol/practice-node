var fs = require('fs');
var fileBuf = fs.readFileSync(process.argv[2]);
//console.log(fileBuf);
var file = fileBuf.toString();
//console.log(file.split('\n'));
console.log(file.split('\n').length-1);