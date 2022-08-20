import { Router } from 'express';
import bodyParser from 'body-parser';
import { userController } from '../controllers/user.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/users/create':
 *  post:
 *     tags:
 *     - users
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - carrera
 *              - nombreDirector
 *              - email
 *              - Password
 *            properties:
 *              carrera:
 *                type: string
 *                default: Software
 *              nombreDirector:
 *                type: string
 *                default: Carlos Alberto Diaz
 *              email:
 *                type: string
 *                default: cdiaz@ids.upchiapas.edu.mx
 *              Password:
 *                type: string
 *                default: cdiaz@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post('/create', (req, res) => userController.user_create(req, res));


router.post('/login', (req, res) =>userController.user_login(req, res));

export default router;