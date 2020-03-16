var express = require("express")
var app=express()
var bodyParser=require("body-parser")
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.set("view engine",'ejs')
console.log("Server Starting")
app.get('/',(req,res) =>{
    res.render('prev',{counter:0})
})
app.post('/',urlencodedParser,(req,res) =>{
    let ctr =Number(req.body.previous || -1)+1
    res.render('prev',{counter:ctr})
})
app.listen(3007)