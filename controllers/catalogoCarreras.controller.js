import { Router } from 'express';

import { getCatalogo } from '../model/catalogoCarreras.js';

const router = Router();

const catalogo_view = async(req, res) => {
    getCatalogo.findAll({ 
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
    }

    const catalogo_create = async(req, res) => {

        getCatalogo.create({
        nombreDocente: req.query.nombreDocente,
        idCarrera: req.query.idCarrera
    })
        .then(docen => {
            res.send(docen);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const catalogoController = {catalogo_view,catalogo_create};