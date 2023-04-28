const {Deportista, TipoEjercicio, EjercicioRealizado} = require ('./datos')

//funciones CRUD para las entidades

//funcion para guadar un Deportista
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
//funcion para editar un Deportista
async function editarDeportista(id, nombre, peso, altura, edad) {
    try {
      await Deportista.findByIdAndUpdate(id, {
        nombre: nombre,
        peso: peso,
        altura: altura,
        edad: edad
      });
      console.log("Deportista editado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar un Deportista
async function eliminarDeportista(id) {
    try {
      await Deportista.findByIdAndDelete(id);
      console.log("Deportista eliminado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para guadar un Tipo de Ejercicio
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
//funcion para editar un Tipo de Ejercicio
async function editarTipoEjercicio(id, nombre) {
    try {
      await TipoEjercicio.findByIdAndUpdate(id, {
        nombre: nombre
      });
      console.log("Tipo de ejercicio editado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar un Tipo de Ejercicio
async function eliminarTipoEjercicio(id) {
    try {
      await TipoEjercicio.findByIdAndDelete(id);
      console.log("Tipo de ejercicio eliminado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para guadar un Ejercicio Realizado
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
//funcion para editar un Ejercicio Realizado
async function editarEjercicioRealizado(idEjercicioRealizado, idDeportista, idTipoEjercicio, fecha, hora, tiempoTranscurrido, caloriasQuemadas) {
    try {
        const ejercicioRealizadoEditado = await EjercicioRealizado.findByIdAndUpdate(idEjercicioRealizado, {
            idDeportista: idDeportista,
            idTipoEjercicio: idTipoEjercicio,
            fecha: fecha,
            hora: hora,
            tiempoTranscurrido: tiempoTranscurrido,
            caloriasQuemadas: caloriasQuemadas
        });
        console.log("Ejercicio realizado editado con éxito.");
    } catch (error) {
        console.error(error);
    }
}
//funcion para eliminar un Ejercicio Realizado
async function eliminarEjercicioRealizado(idEjercicioRealizado) {
    try {
        const ejercicioRealizadoEliminado = await EjercicioRealizado.findByIdAndDelete(idEjercicioRealizado);
        console.log("Ejercicio realizado eliminado con éxito.");
    } catch (error) {
        console.error(error);
    }
}

//funciones para listar los registros de cada entidad

//funcion para listar EjercicioRealizado con el cliclo ForOf
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
//funcion para listar Deportistas con el cliclo ForEach
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
//funcion para listar EjercicioRealizado con el cliclo While
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

//exportamos todas las funciones para llamarlas en el archivo index.js
module.exports = {
    guardarDeportista,
    editarDeportista,
    eliminarDeportista,
    guardarTipoEjercicio,
    editarTipoEjercicio,
    eliminarTipoEjercicio,
    guardarEjercicioRealizado,
    editarEjercicioRealizado,
    eliminarEjercicioRealizado,
    listarEjercicioRealizadoForOf,
    listarDeportistasForEach,
    listarTipoEjercicioWhile
};