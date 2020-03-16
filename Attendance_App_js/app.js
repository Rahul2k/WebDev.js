var express = require('express')
var app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))
var fs = require('fs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/attendance', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Record = new Schema({
    Name : String,
    Present : Boolean
});

const Register = mongoose.model('Attendance', Record);

app.get('/attendance', (req, res) => {
    Register.find({}, (err, docs) => {
        if (err) {
            console.log(err, 'error')
            return
        }

    res.render('attendance', { record: docs, edit: false })
    })
})

app.post('/attendance', urlencodedParser, (req, res) => {
    switch (req.body.button) {
        
        case 'delete':
            Register.deleteOne({ _id: req.body.id }, function (err) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
                res.redirect('/attendance')
            });
            break
        case 'create':
            let newRecord = new Register();
            newRecord.Name = req.body.Name;
            newRecord.Present = req.body.Present;
            newTask.save(function (err) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
            res.redirect('/attendance')
            });
            break
        case 'save':
            Task.updateOne({ _id: req.body.id }, { Name: req.body.Name, Present: req.body.Present }, function (err, writeOpResult) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
            res.redirect('/attendance')
            });
            break
        case 'edit':
            Task.findById(req.body.id, function (err, doc) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
            res.render('attendance', { edit: true, Name: doc.Name, id: doc.id })
            });
            break
    }

    // res.render('index', { time: 120 })
})
app.listen(3037)