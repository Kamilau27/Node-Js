import { response } from "express";
import Lista from "../Modelos/modelosLista.js";
import modelosLista from "../Modelos/modelosLista.js";


const ControladorLista = {
    crearLista: async (request, response) => {
        try {
            const nuevaLista = new modelosLista(request.body);
            const listaCreada = await nuevaLista.save();
            if(listaCreada._id){
                response.json({
                    resultado: 'Hecho',
                    mensaje: 'lista creada',
                    datos: listaCreada._id,
                });   
            }
        } catch (error) {
            response.json({
                resultado: 'Error',
                mensaje: 'Ocurrio un error',
                datos: null,
            });
        }   
    },
    leerLista: async (request, response) => {
        try{
            const todasLasListas = await modelosLista.find();
            response.json({ message: "todas las listas", todasLasListas});
        } catch (error){
            response.json({ message: "Ocurrio un error"});
        }
    },
    leerListaCopia: async (request, response) => {
        try{
            const Lista = await modelosLista.findById(request.params.id);
            response.json({ message: "lista", Lista});
        } catch (error){
            response.json({ message: "Ocurrio un error"});
        }
    },
    actualizarLista: async (request, response) => {
        try{
            const actualizado = await modelosLista.findByIdAndUpdate(
                request.params.id,
                request.body
            );
            response.json({ message: "Lista Actualizada", actualizado});

        } catch (error){
            response.json({ message: "Ocurrios un error"});
        }
    },
    eliminarLista: async (request, response) => {
        try{
            const elimimado = await modelosLista.findByIdAndDelete(
                request.params.id
            );
            response.json({ message: "Lista Eliminado"})
        } catch (error) {
            response.json({})
        }
      
    },
}

export default ControladorLista