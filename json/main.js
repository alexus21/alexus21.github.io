//Leer el archivo del sistema

// Modulo fs de Node.js
// const fs = require("fs");
// let datosSinFormato = fs.readFileSync("./ejemplo.json");
// let datos = JSON.parse(datosSinFormato);

//Uso de Parse (cont)

// console.log (datosSinFormato);
// console.log(datos);

// Uso de Stringify
//
// console.log(datos["nombre"]);
// console.log(datos.nombre);
// console.log(datos["lenguajes"]);
//
// const lenguajes = datos["lenguajes"];
//
// for (let i = 0; i < lenguajes.length; i++) {
//     console.log(lenguajes[i]);
// }

// Uso de Stringify (cont)

// datos.direccion.ciudad = "San Miguel";
// datos.lenguajes.push("Scala");
// console.log(datos);
// fs.writeFileSync("ejemplomod.json", JSON.stringify(datos, null, 4));

// XMLHttpRequest
// const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
// const request = new XMLHttpRequest();
//
// request.open("GET", requestURL);
// request.responseType = "json";
//
// request.send();
//
// request.onload = function() {
//     const heroes = request.response;
//     console.log(heroes);
// };

// Mostrar datos en el DOM

const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

import datosEscuadron from "./datosEscuadron.js";
import mostrarDatos from "./mostrarHeroes.js";

request.onload = function (){
    const heroes = request.response;
    datosEscuadron(heroes);
    mostrarDatos(heroes);
}
