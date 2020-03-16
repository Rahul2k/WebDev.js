var express = require("express")
var app = express()
app.set("view engine", 'ejs')

app.use("/assets", express.static("stuff"))

console.log("server has started")

app.get('/', (req, res) => {
    res.render("staticFiles")
})


app.listen("3000")