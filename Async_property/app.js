var express = require("express")
var app = express()
app.set("view engine", 'ejs')

var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("server has started")

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newdb",{ useNewUrlParser: true })
const Schema=mongoose.Schema
 
const userSchema = new Schema({
    name: String
});

const userModel = mongoose.model('Async', userSchema);

app.get('/',(req,res) =>{
    userModel.find({},(err,docs) =>{
        console.log("1")
    })
    console.log("2")
})
app.listen(3000)