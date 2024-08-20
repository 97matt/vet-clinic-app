//Llamamos las funciones apropiadas para registrar y leer citas.
//De paso seleccionamos el archivo de donde nos basaremos para traer la info.
const { registrar, leer } = require('./operaciones');

//Codigo para q se pueda acceder a los argumentos q inserte el usuario cuando
//Se corra la aplicacion. El 2 representa el 3er elemento, de ahi en adelante
//Viene siendo todo argumento que se le pase al ejecutar.
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

//Agregamos condicion que ocurre al escribir registrar
if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
}

//Agregamos conidicion que ocurre al escribir leer
if (operacion === "leer") {
    leer();
}