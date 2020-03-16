var express=require("express")
var app=express()
var parser=require("body-parser")
var url=parser.urlencoded({extended:false})
app.set("view engine",'ejs')
app.get('/',(req,res) =>{
    res.send("hello")
})
app.get('/array',(req,res) =>{
    res.render('loop',{student: [["name1",100,36,73],["name2",38,64,84],["name3",87,36,91]]})
})
app.post('/array',url,(req,res) =>{
    res.render('loop',{student: req.body})
    console.log("Thanks for submitting")
})
app.listen(3005)