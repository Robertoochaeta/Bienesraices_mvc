import express from 'express';
// Crear la App

const app = express();

// routing
app.get('/',(req,res)=>{
    res.send('Hola Mundo en express');
});
app.get('/nosotros',(req,res)=>{
    res.send('Información de nosotros');
});
// Definir Puerto

const port = 3000;

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
