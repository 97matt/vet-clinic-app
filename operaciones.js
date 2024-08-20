//Importamos file system module para poder correr operaciones, como leer o escribir.
const fs = require('fs');

//Creamos la funcion flecha con una const cita que es el objeto con informacion.
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad };
    //Leemos el contenido dentro de 'citas.json' y agregamos el .parse para q el string se convierta en objeto
    const citasJSON = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    //push agrega el objeto cita nueva q se ingrese al array existente
    citasJSON.push(cita);
    //Devolvemos info nueva al archivo citas.json y usamos stringify para convertir el objeto JS a string
    fs.writeFileSync('citas.json', JSON.stringify(citasJSON));
    //Confirma en consola q la cita fue registrada con sus detalles
    console.log('cita registrada:', cita);
};

//Aca leemos el contenido de citas.json y lo parseamos a un objeto JS
const leer = () => {
    const citasJSON = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    //Aca vemos todos los registros en consola existentes
    console.log('Citas registradas', citasJSON);
};

//Comando para permitir q se puedan exportar estas funciones
module.exports = { registrar, leer };