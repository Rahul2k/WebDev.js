var express = require("express")
var app = express()
app.set("view engine", 'ejs')
var fs = require("fs")
var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("server has started")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const TaskSchema =new Schema({
    title : String
})

const TaskModel = mongoose.model('Task', TaskSchema);

app.get('/', (req, res) => {
    TaskModel.find({},(err,docs) =>{
        if(err) {
            console.log(err) 
            return}
            res.render('to_do',{task: docs})
        })
})

app.post('/', urlencodedParser, (req, res) => {
    const newTask = new TaskModel();
    newTask.title= req.body.task

    newTask.save(function (err) {
        if (err) { console.log(err) }
    });

    res.redirect('/')
})
app.listen(3000)