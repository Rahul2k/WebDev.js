var express=require("express")
var app=express()
var parser=require("body-parser")
var url=parser.urlencoded({extended:false})
app.set("view engine",'ejs')

console.log("Server Starting")
app.get('/',(req,res) =>{
    res.render('Google_form')
})

app.post('/',url,(req,res) =>{
    res.render('submit_form',{data: req.body})
    console.log("Thanks for submitting")
})
app.listen(3001)