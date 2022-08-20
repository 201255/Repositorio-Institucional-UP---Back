import { Router } from 'express';
import bodyParser from 'body-parser';
import { postEController } from '../controllers/PostEnergia.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_son_orm', (req, res) => postEController.son_view(req, res));


export default router;