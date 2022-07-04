import  express  from "express";
import { formularioLogin } from "../controllers/usuarioController";
const router = express.Router();

// routing
router.get('/login', formularioLogin);

export default router;