var express = require("express")
var app = express()

var middleware = (req,res,next) =>{
    console.log("i m in middleware")
    next()
}

app.get('/',middleware,(req,res) =>{
    console.log("In the get request")
    res.send("Hi")
})
app.listen(3000)