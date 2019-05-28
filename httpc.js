const http = require('http')
const bl = require('bl')
const cs = require('concat-stream')

http.get(process.argv[2],(res)=>{
    res.pipe(bl((err,data)=>{
        if(err){console.error}
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})