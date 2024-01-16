import {Schema, model} from 'mongoose';

const esquemalista = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correo: {type: String, required: true},
    telefono: {type: Number, required: true},
    mayorEdad: {type: Boolean, required: true}

}, 
{versionKey: false, timestamps: true }
);

export default model ('Lista', esquemalista);