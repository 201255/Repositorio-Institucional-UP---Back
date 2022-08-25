import { Router } from 'express';
import bodyParser from 'body-parser';
import { ContenidoController } from '../controllers/Contenido.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_son_orm', (req, res) => ContenidoController.son_view(req, res));


export default router;