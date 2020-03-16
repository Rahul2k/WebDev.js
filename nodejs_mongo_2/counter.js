var express = require("express")
var app=express()
app.set("view engine",'ejs')
console.log("server started")

app.get('/',(req,res) =>{
    let ctr=Number(req.query.previous || -1)+1
    res.render('counter',{counter:ctr})
})
app.listen(3003)