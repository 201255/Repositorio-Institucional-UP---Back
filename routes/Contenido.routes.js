import { Router } from 'express';
import bodyParser from 'body-parser';
import { ContenidoController } from '../controllers/Contenido.controller.js';
import multer from 'multer';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets')
},
filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop()
    console.log(file.originalname)
    cb(null, `${file.originalname}`)
}
});
const upload = multer({ storage });


/**
 * @openapi
 * '/api/contenido/create_contenido':
 *  post:
 *     tags:
 *     - contenido
 *     summary: Crear contenido
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *            type: object
 *            required:
 *              - titulo
 *              - autor
 *              - segundoAutor
 *              - fecha
 *              - enlaceDocumento
 *            properties:
 *              titulo: 
 *                type: string
 *                default: Algoritmo basado en KMeans
 *              autor:
 *                type: string
 *                default: Jesus Eduardo Jimenez
 *              segundoAutor:
 *                type: string
 *                default: Luis Daniel Cruz
 *              fecha:
 *                type: string
 *                default: 27 de Agosto de 2022
 *              enlaceDocumento:
 *                type: string
 *                format: binary                
 *                default: enlaceDocumento
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post('/create_contenido', upload.single('enlaceDocumento'), (req, res) => ContenidoController.contenido_create(req, res));


/**
 * @openapi
 * '/api/contenido/view':
 *  get:
 *     tags:
 *     - contenido
 *     summary: visualizar Conetnido
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
 router.get("/view", (req, res) => ContenidoController.contenido_view(req, res));

 router.get("/view_pdf", (req, res) => ContenidoController.contenido_viewPDF(req, res));



 /**
 * @openapi
 * '/api/contenido/view_tesisM':
 *  get:
 *     tags:
 *     - contenido
 *     summary: visualizar Conetnido
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
  router.get("/view_tesisM", (req, res) => ContenidoController.contenido_viewM(req, res));

/**
 * @openapi
 * '/api/contenido/view_tesisDoc':
 *  get:
 *     tags:
 *     - contenido
 *     summary: visualizar Conetnido
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.get("/view_tesisDoc", (req, res) => ContenidoController.contenido_viewD(req, res));

/**
 * @openapi
 * '/api/contenido/delete_contenido':
 *  delete:
 *     tags:
 *     - contenido
 *     summary: eliminar contenido
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            required:
 *              -Id
 *            properties:
 *              Id:
 *                type: UUID
 *                default: id
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.delete('/delete_contenido', (req,res) => ContenidoController.contenido_delete(req, res) );

/**
 * @openapi
 * '/api/contenido/update_contenido':
 *  put:
 *     tags:
 *     - contenido
 *     summary: actualizar contenido
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Id
 *              - titulo
 *              - autor
 *              - fecha
 *              - enlaceDocumento
 *            properties:
 *              Id:
 *                type: string
 *                default: id
 *              titulo: 
 *                type: string
 *                default: Algoritmo basado en KMeans
 *              autor:
 *                type: string
 *                default: Jesus Eduardo Jimenez
 *              fecha:
 *                type: string
 *                default: 27 de Agosto de 2022
 *              enlaceDocumento:
 *                type: string
 *                default: file:///C:/Users/USER/Desktop/8%20Cuatrimestre/IDS%205B_EQUIPO%201.pdf
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.put('/update_contenido', (req,res) => ContenidoController.contenido_update(req,res));


export default router;