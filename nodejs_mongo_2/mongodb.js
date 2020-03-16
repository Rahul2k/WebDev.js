var express = require("express")
var app=express()
var parser = require("body-parser")
var url = parser.urlencoded({extended:false})
app.set("view engine",'ejs')
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String
})

app.get('/get',(req,res) =>{
    res.render('index1')
})
app.post('/post',url,(req,res) =>{
    console.log(req.body)
    let instance = new userModel()
    instance.name = "A"
    instance.save(function(err){
        console.log(err)
    })
    res.render('index1')
})