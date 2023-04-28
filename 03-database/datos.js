const mongoose = require('mongoose');

//cadena de conexion para conectarnos a la base de datos de mongoDB atlas
const cadenaConexion = "mongodb+srv://toalaerick56:toalaerick56@cluster0.9flgjye.mongodb.net/ControlEjercicio";

(async ()=>{
    try{    
        const conexion = await mongoose.connect(cadenaConexion); 
    }catch(error){
        console.log(error);
    }
})()

//declaramos los modelos para cada entidad

//entidad Deportista
const Deportista = mongoose.model("Deportista",{
    nombre:String,
    peso:String,
    altura:String,
    edad:String,
});

//entidad TipoEjercicio
const TipoEjercicio = mongoose.model("TipoEjercicio",{nombre:String});

//entidad EjercicioRealizado
const EjercicioRealizado = mongoose.model("EjercicioRealizado",{
    idDeportista:{type:mongoose.Types.ObjectId, ref:"Deportista"},
    idTipoEjercicio:{type:mongoose.Types.ObjectId, ref:"TipoEjercicio"},
    fecha:String,
    hora:String,
    tiempoTranscurrido:String,
    caloriasQuemadas:String,
});
 
//exportamos los modelos anteriores para usarlos en las funciones CRUD y de listar del archivo funciones.js
module.exports = {
    Deportista,
    TipoEjercicio,
    EjercicioRealizado,
};