var express = require("express")
var form = express()

form.set("view engine",'ejs')
form.get('/form',(req,res) =>{
    console.log("In the form")
    let name=req.query.name
    let age=req.query.age
    let rollno=req.query.rollno
    let batch=req.query.batch
    let branch=req.query.branch
    res.render('form', {name: name,age,rollno,batch,branch})
})
form.get('/form',(req,res) =>{
    res.send(name)
})
form.listen(3002)