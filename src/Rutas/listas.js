import { Router, response } from 'express';
import ControladorLista from "../Controladores/controladorLista.js";

const enrutador = Router();


enrutador.post('/', ControladorLista.crearLista);
enrutador.get('/', ControladorLista.leerLista);
enrutador.get('/:id', ControladorLista.leerListaCopia);
enrutador.put('/:id', ControladorLista.actualizarLista);
enrutador.delete('/:id', ControladorLista.eliminarLista);



export default enrutador;