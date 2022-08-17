import { Router } from 'express';

import { getCatalogo } from '../model/catalogoCarreras.js';

const router = Router();

router.get('/all_catalogoCa', async function (req, res) {
    getCatalogo.findAll({ 
        // include:{
        //     model:getTesisPre,
        //     attributes:['name','lastNamef','lastNamem','age']
        // },
        attributes: ['nombreDocente'] })
        .then(catalogo => {
            res.send(catalogo)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/create_catalogoCa', async function (req, res) {

    getCatalogo.create({
        nombreDocente: req.query.nombreDocente
    })
        .then(catalogo => {
            res.send(catalogo);
        })
        .catch((err) => {
            console.log(err);
        });
});

export default router;