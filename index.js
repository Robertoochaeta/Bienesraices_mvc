import express from 'express';
import usuariosRoutes from './routes/UsuarioRoutes.js';
// Crear la App

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
// Definir Puerto
app.use('/auth', usuariosRoutes);
const port = 3000;

// Habilitar pug

// carpeta pulica 

app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
