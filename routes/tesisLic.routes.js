import { Router } from 'express';
import bodyParser from 'body-parser';
import { TesisLicController } from '../controllers/TesisLic.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/tesislic/create_tesislic':
 *  post:
 *     tags:
 *     - tesislic
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

router.post('/create_tesislic', (req, res) => TesisLicController.tesislic_create(req, res));

/**
 * @openapi
 * '/api/tesislic/delete_tesislic':
 *  delete:
 *     tags:
 *     - tesislic
 *     summary: eliminar tesislic
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            required:
 *              - IdTesisLic
 *            properties:
 *              IdTesisLic:
 *                type: string
 *                default: id
 *     responses:
 *      200:
 *        description: delete
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.delete('/delete_tesislic', (req, res) => TesisLicController.tesislic_delete(req, res));


export default router;