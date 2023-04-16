const {ejercicio_realizado, deportista} = require ('./datos')

//AsyncAwait

//async para Ejercicio realizado
async function findEjercicioRealizadoAsync(id){
    const Ejercicio_realizado = ejercicio_realizado.find((Ejercicio_realizado)=> Ejercicio_realizado.id===id );
    if (!Ejercicio_realizado)
    {
        const error =  new Error();
        error.message="No encontramos el libro";
        throw error;
    }
    return Ejercicio_realizado;

}

//async para Deportista
async function findDeportistaAsync(id){
    const Deportista =  deportista.find((Deportista)=>{
        return Deportista.id===id;
    });
    if (!Deportista)
    {
        const error = new Error();
        error.message="No encontramos el deportista";
        throw error;
    }
    return Deportista;
}


//mostramos el Ejercicio realizado con a busqueda hecha por id
(async ()=>{
    try
    {
        const Ejercicio_realizado  =   await findEjercicioRealizadoAsync(3);
        const Deportista =   await  findDeportistaAsync(Ejercicio_realizado.iddeportista);
        Ejercicio_realizado.Deportista = Deportista;
        console.log(`--- Ejercicio realizado: ${Ejercicio_realizado.id} \nFecha: ${Ejercicio_realizado.fecha} Hora: ${Ejercicio_realizado.hora} \nTiempo transcurrido: ${Ejercicio_realizado.tiempo_trancurrido} \nCalorias quemadas: ${Ejercicio_realizado.calorias_quemadas}`);
        console.log(`--- Fue realizado por el deportista: ${Deportista.nombre} \nPeso: ${Deportista.peso} \nAltura: ${Deportista.altura} \nEdad: ${Deportista.edad}`);
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();