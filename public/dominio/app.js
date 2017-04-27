//require se usa para importar el modulo
//http es la libreria basica para servir aplicaciones web
var express = require("express");

var app = express();

app.get("/",function(req,res){
  res.end("hola mundo");
});

app.listen(9090);
