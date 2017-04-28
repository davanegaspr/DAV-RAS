//require se usa para importar el modulo
//http es la libreria basica para servir aplicaciones web
var express = require("express");

var app = express();
//app.set("view engine", "jade");

app.use(express.static('../public'));
app.get("/",function(req,res){
res.sendFile("index.html",{root: __dirname+"/"});
});

app.listen(9090);
