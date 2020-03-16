var express = require("express")
var app = express()
app.set("view engine",'ejs')

app.use('/assets', express.static("stuff"))

app.listen(3000)