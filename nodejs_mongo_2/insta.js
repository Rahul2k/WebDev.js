var express = require("express")
var app = express()
var bodyParser=require("body-parser")
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.set("view engine",'ejs')
console.log("server started")
app.get('/',(req,res) =>{
    res.render('insta',{login: null})
})
app.post('/',urlencodedParser,(req,res) =>{
    
})