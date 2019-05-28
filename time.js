const net = require('net')
const st = require('strftime')

var server = net.createServer((socket)=>{
    var date = new Date()
    console.log(date)
    socket.write(st('%F %R',date))
    socket.end('\n')
})
server.listen(parseInt(process.argv[2]))