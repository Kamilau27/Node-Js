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
            response.json({ 
                resultado: 'hecho',
                message: "todas las listas", 
                datos: todasLasListas
            });
        } catch (error){
            response.json({ 
                resultado: 'Error',
                mensaje: 'Ocurrio un error',
                datos: null,
            });
        }
    },
    leerListaCopia: async (request, response) => {
        try{
            const Lista = await modelosLista.findById(request.params.id);
            response.json({ 
                resultado: "hecho",
                message: "Una lista hecho", 
                dato: {
                    id: Lista._id,
                    nombre: Lista.nombre,
                    apellido: Lista.apellido,
                    entregado: Lista.entregado
                }
                });
        } catch (error){
            response.json({ 
                resultado: 'Error',
                mensaje: 'Ocurrio un error',
                datos: null,
            });
        }
    },
    actualizarLista: async (request, response) => {
        try{
            const actualizado = await modelosLista.findByIdAndUpdate(
                request.params.id,
                request.body
            );
            response.json({ 
                resultado: "hecho",
                message: "Lista Actualizada", 
                dato: actualizado._id
            });

        } catch (error){
            response.json({ 
                resultado: 'Error',
                mensaje: 'Ocurrio un error',
                datos: null,
            });
        }
    },
    eliminarLista: async (request, response) => {
        try{
            const elimimado = await modelosLista.findByIdAndDelete(
                request.params.id
            );
            response.json({ 
                resultado: "Eliminado",
                message: "Lista Eliminado",
                datos: elimimado._id
            });
        } catch (error) {
            response.json({
                resultado: 'Error',
                mensaje: 'Ocurrio un error',
                datos: null,
            })
        }
      
    },
}

export default ControladorLista