var express = require("express")
var app = express()
app.set("view engine", 'ejs')

var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("server has started")

app.get('/', (req, res) => {
    res.render("home", { request: "Get request initiated" })
})

app.post('/', urlencodedParser, (req, res) => {
    res.render("home", {
        email: req.body.email,
        request: "Get request initiated"
    })
})

app.listen("3000")