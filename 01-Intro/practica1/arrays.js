const tipo_ejercicio = [
    {id:1, tipo:'Sentadilla'},
    {id:2, tipo:'Dominadas'},
    {id:3, tipo:'Peso muerto'},
    {id:4, tipo:'Zancadas'},
    {id:5, tipo:'Planchas'}
]
const deportista = [
    {id:1, nombre:'Erick Toala', peso:'61kg', altura:'1.75 m', edad:21},
    {id:2, nombre:'Luis Tuarez', peso:'70kg', altura:'1.73 m', edad:22},
    {id:3, nombre:'Joan Gallardo', peso:'66kg', altura:'1.78 m', edad:22},
    {id:4, nombre:'Pamela Vera', peso:'63kg', altura:'1.66 m', edad:20},
    {id:5, nombre:'Marselo Vera', peso:'67kg', altura:'1.74 m', edad:19}
]

const ejercicio_realizado = [
    {id:1, idtipo_ejercicio:1, iddeportista:1, fecha:'4/4/2023', hora:'20:14:56', tiempo_trancurrido:'30 minutos', calorias_quemadas:'300'},
    {id:2, idtipo_ejercicio:2, iddeportista:5, fecha:'4/4/2023', hora:'16:26:23', tiempo_trancurrido:'15 minutos', calorias_quemadas:'165'},
    {id:3, idtipo_ejercicio:2, iddeportista:4, fecha:'4/4/2023', hora:'18:45:43', tiempo_trancurrido:'45 minutos', calorias_quemadas:'450'},
    {id:4, idtipo_ejercicio:5, iddeportista:2, fecha:'4/4/2023', hora:'19:34:14', tiempo_trancurrido:'20 minutos', calorias_quemadas:'240'},
    {id:5, idtipo_ejercicio:5, iddeportista:1, fecha:'4/4/2023', hora:'21:20:08', tiempo_trancurrido:'30 minutos', calorias_quemadas:'500'},
]

//exportamos los arrays de objetos para usarlos en las funciones
module.exports = {
    ejercicio_realizado,
    deportista,
    tipo_ejercicio
};