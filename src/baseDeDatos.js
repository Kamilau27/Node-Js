import mongoose from 'mongoose';

mongoose
.connect(process.env.MONGODBATLAS)
.then((dato) => console.info("camino feliz"))
.catch ((error)=>
conloge.console.error("camino triste")
);