import express from 'express';
import enrutadorLista from './Rutas/listas.js';

const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.use(express.json());

servidor.use('/Lista/', enrutadorLista);

servidor.get('/', (request, response) => {
    response.json({ message: 'WORKS!!!' });
});

export default servidor;