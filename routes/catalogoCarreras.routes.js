import { Router } from 'express';
import bodyParser from 'body-parser';
import { catalogoController } from '../controllers/catalogoCarreras.controller.js';


const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_catalogo', (req, res) => catalogoController.catalogo_view(req, res));


router.post('/create_catalogo', (req, res) =>catalogoController.catalogo_create(req, res));


export default router;