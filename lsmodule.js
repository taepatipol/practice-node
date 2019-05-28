//console.log('module called')
const fs = require('fs')
function ls(dir,ext,callback){
    //console.log(dir,ext)
    var result = [];
    fs.readdir(dir,(err,data) => {
        var result = [];
        if(err){return callback(err)}
        //console.log(data)
        data.forEach((str) => {
            if(str.split('.')[1] == ext){
                result.push(str)
            }
        })
        callback(null, result)
    })
}
module.exports = ls