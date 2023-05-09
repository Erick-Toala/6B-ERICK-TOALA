const {deportistas} = require ('./datos')

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  5000;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//GET - Obtener todos los deportistas
app.get('/deportistas', (req,res)=>{
    res.status(200).send(
        deportistas
    );
})

//GET - Obtener un deportista por su ID
app.get('/deportistas/:id', (req, res) => {
    const deportista = deportistas.find(d => d.id === parseInt(req.params.id));
    if (!deportista) {
      res.status(404).send('El deportista con el ID especificado no existe.');
      return;
    }
    res.send(deportista);
});

//POST - Crear/Insertar un nuevo deportista
app.post('/deportistas/insertar', (req,res)=>{
    const {body} = req;
    deportistas.push(body);
    res.status(200).send({
        message:"Deportista insertado correctamente",
        response: body
    });
});

//PUT - Modificar un deportista por su ID
app.put('/deportistas/modificar/:id', (req,res)=>{
    const {id, nombre, peso, altura, edad} = req.body;
    
    let deportista =  deportistas.filter(p=> p.id === id)[0] || {}

    deportista.nombre = nombre;
    deportista.peso = peso;
    deportista.altura = altura;
    deportista.edad = edad;

    res.status(200).send(
        {
            message:'Deportista modificado correctamente',
            response: deportista
        }
    );
});

//DELETE - Eliminar un deportista por su ID
app.delete('/deportistas/eliminar/:id', (req, res) => {
    const index = deportistas.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send(
            {
                message:'El deportista con el ID especificado no existe.'
            }
        );
      return;
    }
    deportistas.splice(index, 1);
    res.status(200).send(
        {
            message:'Deportista eliminado correctamente',
        }
    );
});

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
});