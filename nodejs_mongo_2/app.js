var express = require("express")
var app = express()
console.log("Server started")

app.get('/contact',(req,res) =>{
    res.send("hello")
})


app.set("view engine",'ejs')

app.get('/',(req,res) =>{
    let name = req.query.name
    let age = req.query.age
    res.render('index',{name: name,age})
})
app.listen(3000)