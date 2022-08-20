import { Router } from 'express';
import bodyParser from 'body-parser';
import { IngAmbientalController } from '../controllers/IngAmbiental.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_son_orm', (req, res) => IngAmbientalController.son_view(req, res));


export default router;