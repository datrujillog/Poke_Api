import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


//importar las rutas 

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes


//middleware de errores
app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json({ message: error.message || error });

});


export default app;

