var express = require("express")
var app=express()
var bodyParser=require("body-parser")
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.set("view engine",'ejs')
console.log("server started")
app.get('/',(req,res) =>{
    res.render('prev',{counter: 0})
})
app.post('/',urlencodedParser,(req,res) =>{
    let ctr = Number(req.body.ctr)
    if(req.body.i=='i'){
        ctr=ctr+1
    }
    else{
        ctr=ctr-1
    }
    res.render('prev',{counter: ctr})
})
app.listen(3010)