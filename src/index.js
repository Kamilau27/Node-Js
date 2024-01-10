'use strict';
import express, { response } from 'express';

const servidor = express();
const puerto = 3000;

servidor.get('/', (request, response) => {
    response.json({ message: 'WORKS!!!' });
});

servidor.listen (puerto, () => {
    console.log(`Servidor Ejecutandose en el puerto: ${puerto}`);
});