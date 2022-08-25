import { Router } from 'express';
import bodyParser from 'body-parser';
import { TesisLicController } from '../controllers/TesisLic.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_son_orm', (req, res) => TesisLicController.son_view(req, res));


export default router;