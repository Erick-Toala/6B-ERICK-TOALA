const {
    guardarDeportista,
    guardarTipoEjercicio,
    guardarEjercicioRealizado,
    listarEjercicioRealizadoForOf, 
    listarDeportistasForEach, 
    listarTipoEjercicioWhile
} = require ('./funciones')

//funciones CRUD de las entidades
guardarDeportista("Erick Toala","100kg","1.76,m","21");
guardarTipoEjercicio("Sentadillas");
guardarEjercicioRealizado("6449e1fd7a917e5b28792a48","6449e1fd7a917e5b28792a49","4/4/2023","18:45:43","30 minutos","300"); //los dos primeros campos deben ser datos existentes

//funciones para listar por consola los datos registrados en las 3 colecciones
listarEjercicioRealizadoForOf();
listarDeportistasForEach();
listarTipoEjercicioWhile();