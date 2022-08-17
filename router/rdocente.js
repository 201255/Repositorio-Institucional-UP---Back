import { Router } from 'express';

import { getDocente } from '../model/docentes.js';

const router = Router();

router.get('/all_docentes', async function (req, res) {
    getDocente.findAll({ 
        // include:{
        //     model:getTesisPre,
        //     attributes:['name','lastNamef','lastNamem','age']
        // },
        attributes: ['nombreDocente','idCarrera',] })
        .then(docen => {
            res.send(docen)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/create_docentes', async function (req, res) {

    getDocente.create({
        nombreDocente: req.query.nombreDocente,
        idCarrera: req.query.idCarrera
    })
        .then(docen => {
            res.send(docen);
        })
        .catch((err) => {
            console.log(err);
        });
});

export default router;