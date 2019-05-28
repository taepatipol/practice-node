const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let stream = fs.createReadStream('test.txt')
    stream.pipe(res)
})

server.listen(8000)