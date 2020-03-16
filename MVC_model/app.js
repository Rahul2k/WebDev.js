var express = require('express')
var app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newdb', { useNewUrlParser: true });

var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1160000 } }))
app.set("view engine", "ejs")
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render("index")
})
app.get('/404', (req, res) => {
    res.send("404 error")
})

var userController = require('./controllers/user.js')
app.use('/user', userController)

app.listen(3000, () => {
    console.log("Server is running")
})