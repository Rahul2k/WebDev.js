var express = require("express")
var app = express()
app.set("view engine", 'ejs')

console.log("server has started")


app.get('/', (req, res) => {
    res.render("forloop", {
        users: ["A", "B", "C", "D"]
    })
})

app.listen("3000")