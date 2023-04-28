const {
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
} = require ('./funciones')

//funciones para guardar las entidades
guardarDeportista("Erick Toala","100kg","1.76,m","21");
guardarTipoEjercicio("Sentadillas");
guardarEjercicioRealizado("id del deportista existente","id del tipo de ejercicio existente","4/4/2023","18:45:43","30 minutos","300"); //los dos primeros campos deben ser datos existentes

//funciones para editar las entidades. El primer campo debe ser existente en la BD.
editarDeportista("id del deportista a editar","Erick Editado","80kg","1.78m","20");
editarTipoEjercicio("id del tipo de ejercicio a editar","nombre a editar");
editarEjercicioRealizado("id del tipo del Ejercicio Realizado a editar","id del deportista","id del tipo de ejercicio","5/12/2023","19:45:43","60 minutos","500");

//funciones para eliminar las entidades. Se tiene que pasar el id del registro, debe ser existente.
eliminarDeportista("id del deportista a eliminar");
eliminarTipoEjercicio("id del tipo de ejercicio a eliminar");
eliminarEjercicioRealizado("id del tipo del Ejercicio Realizado a eliminar");

//funciones para listar por consola los datos registrados en las 3 colecciones
listarEjercicioRealizadoForOf();
listarDeportistasForEach();
listarTipoEjercicioWhile();