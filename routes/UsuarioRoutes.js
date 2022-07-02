import  express  from "express";

const router = express.Router();

// routing
router.get('/',(req,res)=>{
    res.send('Hola Mundo en express');
});
router.post('/',(req,res)=>{
    res.json({msg:'Respuesta de tipo Post'});
});
export default router;