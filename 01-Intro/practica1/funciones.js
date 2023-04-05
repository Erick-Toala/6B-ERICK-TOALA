//importamos los arreglos de objetos para usarlos en la funciones
const {ejercicio_realizado, deportista, tipo_ejercicio} = require ('./arrays')

//obtenemos mediante esta funcion el ejercicio realizado por los deportistas con el bucle for
function getEjercicioRealizadoFor()
{
    console.log(`                    EJERCICIO REALIZADO`)
    for (const iterator of ejercicio_realizado)
    {
        const deportista_aux = deportista.find(ele=>ele.id===iterator.iddeportista)
        const ejercicio_aux = tipo_ejercicio.find(ele=>ele.id===iterator.idtipo_ejercicio)
        console.log(`---------------------------------------------------------`)
        console.log(`${deportista_aux.nombre} realizó el ejercicio ${ejercicio_aux.tipo} \nFecha: ${iterator.fecha} Hora: ${iterator.hora} \nTiempo transcurrido: ${iterator.tiempo_trancurrido} Calorias quemadas: ${iterator.calorias_quemadas}`); 
    }
    console.log(`---------------------------------------------------------`)
}

//obtenemos mediante esta funcion los deportistas con ForEach
function getDeportistasForEach(){
    console.log(`                    DEPORTISTAS`)
    deportista.forEach(function(valor){
        console.log(`---------------------------------------------------------`)
        console.log(`Nombre: ${valor.nombre}    Peso: ${valor.peso} \nAltura: ${valor.altura}    Edad: ${valor.edad} años`)
    })
    console.log(`---------------------------------------------------------`)
}

//obtenemos mediante esta funcion los tipos de ejercicio con el bucle while
function getTipoEjerciciosWhile(){
    var i=0
    console.log(`                    TIPOS DE EJERCICIO`)
    console.log(`---------------------------------------------------------`)
    while(i < tipo_ejercicio.length) {
        console.log(tipo_ejercicio[i].tipo);
        ++i;
    }
    console.log(`---------------------------------------------------------`)
}

//exportamos las funciones
module.exports = {
    getEjercicioRealizadoFor,
    getDeportistasForEach,
    getTipoEjerciciosWhile
};