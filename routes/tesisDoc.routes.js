import { Router } from 'express';
import bodyParser from 'body-parser';
import { tesisDocController } from '../controllers/TesisDoc.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/tesisDoc/create_tesisDoc':
 *  post:
 *     tags:
 *     - tesisDoc
 *     summary: Crear tesisDoc
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - carrera
 *              - directorTesis
 *              - coDirector
 *              - ContenidoId
 *            properties:
 *              carrera: 
 *                type: string
 *                default: Software
 *              directorTesis:
 *                type: string
 *                default: Dr. Carlos Alberto Diaz
 *              coDirector:
 *                type: string
 *                default: Dr. Hector Nuricumbo
 *              ContenidoId:
 *                type: string
 *                default: id
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */


router.post('/create_tesisDoc', (req, res) => tesisDocController.tesisDoc_create(req, res));


export default router;