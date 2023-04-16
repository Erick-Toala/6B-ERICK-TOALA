const {ejercicio_realizado, deportista} = require ('./datos')

//Promises

//promise para Ejercicio realizado
function findEjercicioRealizadoPromise(id){
    return new Promise((resolve, reject)=>{
        const Ejercicio_realizado = ejercicio_realizado.find((Ejercicio_realizado)=> Ejercicio_realizado.id===id );
        if (!Ejercicio_realizado)
        {
            const error= new Error();
            error.message="El ejercicio realizado no fue encontrado";
            reject(error);
        }
        resolve(Ejercicio_realizado);
    })
}

//promise para Deportista
function findDeportistaPromise(id){
    return new Promise((resolve, reject)=>{
        const Deportista =  deportista.find((Deportista)=>{
            return Deportista.id===id;
        });
        if (!Deportista)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el deportista";
            reject(error);
        }
        resolve(Deportista);
    })
}

//mostramos el Ejercicio realizado con a busqueda hecha por id

findEjercicioRealizadoPromise(1)
.then((Ejercicio_realizado)=>{ 
    console.log(`--- Ejercicio realizado: ${Ejercicio_realizado.id} \nFecha: ${Ejercicio_realizado.fecha} Hora: ${Ejercicio_realizado.hora} \nTiempo transcurrido: ${Ejercicio_realizado.tiempo_trancurrido} \nCalorias quemadas: ${Ejercicio_realizado.calorias_quemadas}`);
    return findDeportistaPromise(Ejercicio_realizado.iddeportista);
})
.then((Deportista)=>{
    console.log(`--- Fue realizado por el deportista: ${Deportista.nombre} \nPeso: ${Deportista.peso} \nAltura: ${Deportista.altura} \nEdad: ${Deportista.edad}`);
})
.catch((error)=>{
    console.log(error.message)
})
