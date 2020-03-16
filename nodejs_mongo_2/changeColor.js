var express =require("express")
var app=express()
app.set("view engine",'ejs')

console.log("server started")
app.get('/',(req,res) =>{
    let color= req.query.color || "black"
    res.render('color',{color:color})
})
app.listen(3001)