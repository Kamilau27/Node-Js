import express from 'express';
import cors from 'cors';
import enrutadorLista from './Rutas/listas.js';


const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.use(cors());
servidor.use(express.json());
servidor.use('/Lista/', enrutadorLista);

servidor.get('/', (request, response) => {
    response.json({ message: 'WORKS RAIZ!' });
});

export default servidor;