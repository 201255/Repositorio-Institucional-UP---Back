import { Router } from 'express';

import { getDocente } from '../model/docentes.js';

const router = Router();

const docente_view = async(req, res) => {
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
    }

    const docente_create = async(req, res) => {

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
}

export const docenteController = {docente_view,docente_create};