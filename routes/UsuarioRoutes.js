import  express  from "express";

const router = express.Router();

// routing
router.get('/login',(req,res)=>{
    res.render('auth/login',{
        autenticado:true
    })
});

export default router;