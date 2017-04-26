//require se usa para importar el modulo
//http es la libreria basica para servir aplicaciones web

var http = require("http");

var manejador = function(solicitud, respuesta){//(información de la solicitud,respuesta que se dara)
  console.log("Hola Mundo");
  respuesta.end("hola navegador");//para cerrar la conexión
}

var servidor = http.createServer(manejador);

servidor.listen(9090);//en que puerto va a estar escuchando
