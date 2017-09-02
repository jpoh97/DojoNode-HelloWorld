//como leer un arhivo en nodejs
//docs de nodejs
//fs readFile y readFileSync

//Crear modulos de node (paso 1)

var http = require("http"),
    fs = require("fs"); /*modulo para conectarse con el sistema
                        de archivos en la computadora (paso 2)*/
/*Forma sincrona (paso 6)
Donde al servidor le toca esperar la respuesta para leer el archivo*/

var html = fs.readFileSync("./index.html") /*Busca dentro de la misma carpeta
                                    y retorna el contenido del archivo (paso 7)*/

/*Forma Asincrona (paso 11)
La forma asincrona toma ventaja de la funcion de nodejs, mandandole el archivo
y el callback que se ejecuta despues que se termino de hacer algo*/
/*Despues de haber leido el archivo, llama al callback*/

//Paso 12: Pasar el readfile a create server
//crear el servidor (paso 3)
http.createServer(function(req, res){ //Solicitud y respuesta (paso 4)
  fs.readFile("./index.html", function(err,html){
    res.write(html); //Probar escribiendo el contenido de index  (paso 8)
    res.end();       //finalizar la petición (paso 9)
  });
}).listen(8080); //puerto de escucha (paso 5)

//Correr con node hola_html.js y ir a localhost:8080
