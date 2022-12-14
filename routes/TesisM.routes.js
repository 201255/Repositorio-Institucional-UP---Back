import { Router } from 'express';
import bodyParser from 'body-parser';
import { TesisMController } from '../controllers/TesisM.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/tesisM/create_tesisM':
 *  post:
 *     tags:
 *     - tesisM
 *     summary: Crear tesislic
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


router.post('/create_tesisM', (req, res) => TesisMController.tesisM_create(req, res));


export default router;