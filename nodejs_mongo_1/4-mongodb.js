var express = require("express")
var app = express()
app.set("view engine", 'ejs')

var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("server has started")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: String
});

const userModel = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.render("mongodb")
})

app.post('/', urlencodedParser, (req, res) => {
    const userInstance = new userModel();
    userInstance.name = req.body.name;
    userInstance.age = req.body.age;
    userInstance.save(function (err) {
        if (err) { console.log(err) }
    });

    res.render("mongodb")
})

app.listen("3000")