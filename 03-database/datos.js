const mongoose = require('mongoose');

const cadenaConexion = "mongodb+srv://toalaerick56:toalaerick56@cluster0.9flgjye.mongodb.net/ControlEjercicio";

(async ()=>{
    try{    
        const conexion = await mongoose.connect(cadenaConexion); 
    }catch(error){
        console.log(error);
    }
})()

const Deportista = mongoose.model("Deportista",{
    nombre:String,
    peso:String,
    altura:String,
    edad:String,
});
const TipoEjercicio = mongoose.model("TipoEjercicio",{nombre:String});

const EjercicioRealizado = mongoose.model("EjercicioRealizado",{
    idDeportista:{type:mongoose.Types.ObjectId, ref:"Deportista"},
    idTipoEjercicio:{type:mongoose.Types.ObjectId, ref:"TipoEjercicio"},
    fecha:String,
    hora:String,
    tiempoTranscurrido:String,
    caloriasQuemadas:String,
});
     
module.exports = {
    Deportista,
    TipoEjercicio,
    EjercicioRealizado,
};