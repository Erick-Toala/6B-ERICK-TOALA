const {Deportista, TipoEjercicio, EjercicioRealizado} = require ('./datos')

async function guardarDeportista(nombre, peso, altura, edad) {
    try {
        const nuevoDeportista = new Deportista({
            nombre: nombre,
            peso: peso,
            altura: altura,
            edad: edad
        });
        const deportistaSave = await nuevoDeportista.save();
        console.log("Deportista guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function guardarTipoEjercicio(nombre) {
    try {
        const nuevoTipoEjercicio = new TipoEjercicio({
            nombre: nombre
        });
        const tipoEjercicioSave = await nuevoTipoEjercicio.save();
        console.log("Tipo de ejercicio guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function guardarEjercicioRealizado(idDeportista, idTipoEjercicio, fecha, hora, tiempoTranscurrido, caloriasQuemadas) {
    try {
        const nuevoEjercicioRealizado = new EjercicioRealizado({
            idDeportista: idDeportista,
            idTipoEjercicio: idTipoEjercicio,
            fecha: fecha,
            hora: hora,
            tiempoTranscurrido: tiempoTranscurrido,
            caloriasQuemadas: caloriasQuemadas
        });
        const ejercicioRealizadoSave = await nuevoEjercicioRealizado.save();
        console.log("Ejercicio realizado guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function listarEjercicioRealizadoForOf() {
    try {
        const ejerciciosRealizados = await EjercicioRealizado.find().populate('idDeportista idTipoEjercicio');
        console.log(`      EJERCICIOS REALIZADOS`)
        console.log('---------------------------------');
        for (const ejercicio of ejerciciosRealizados) {
          console.log(`ID: ${ejercicio._id}`);
          console.log(`Deportista: ${ejercicio.idDeportista.nombre}`);
          console.log(`Tipo de Ejercicio: ${ejercicio.idTipoEjercicio.nombre}`);
          console.log(`Fecha: ${ejercicio.fecha}`);
          console.log(`Hora: ${ejercicio.hora}`);
          console.log(`Tiempo Transcurrido: ${ejercicio.tiempoTranscurrido}`);
          console.log(`Calorías Quemadas: ${ejercicio.caloriasQuemadas}`);
          console.log('---------------------------------');
        }
      } catch (error) {
        console.log('Error al listar datos de ejercicios', error);
      }
}
async function listarDeportistasForEach() {
    try {
        const cursor = await Deportista.find();
        console.log(`           DEPORTISTAS`)
        console.log('---------------------------------');
        cursor.forEach((valor) => {
            console.log(`Nombre: ${valor.nombre}`);
            console.log(`Peso: ${valor.peso}`);
            console.log(`Altura: ${valor.altura}`);
            console.log(`Edad: ${valor.edad}`);
            console.log('---------------------------------');
        });
    } catch (error) {
      console.log('Error al listar deportistas', error);
    }
}
async function listarTipoEjercicioWhile() {
    try {
        const tipoEjercicios = await TipoEjercicio.find();
        let i = 0;
        console.log(`       TIPOS DE EJERCICIOS`)
        console.log('---------------------------------');
        while (i < tipoEjercicios.length) {
            console.log(`ID: ${tipoEjercicios[i]._id}`);
            console.log(`Nombre: ${tipoEjercicios[i].nombre}`);
            console.log('---------------------------------');
            i++;
        }
    } catch (error) {
        console.log('Error al listar datos de TipoEjercicio', error);
    }
}
module.exports = {
    guardarDeportista,
    guardarTipoEjercicio,
    guardarEjercicioRealizado,
    listarEjercicioRealizadoForOf,
    listarDeportistasForEach,
    listarTipoEjercicioWhile
};