import { getTesisDoctorado } from "../model/TesisDoc.model.js";
import { Router } from "express";
import { dataEnv } from '../config/envData.js';
import bodyParser from "body-parser";

const router = Router();


const tesisDoc_create = async (req,res) => {
    const carrera = req.body.carrera;
    const directorTesis = req.body.directorTesis;
    const coDirector = req.body.coDirector;
    const ContenidoId = req.body.ContenidoId;
    
    getTesisDoctorado.create({
        carrera,
        directorTesis,
        coDirector,
        ContenidoId
    })
        .then(TesisDoc => {
            res.send(TesisDoc)
        })
        .catch(err => {
            console.log(err)
        })
}

export const tesisDocController = {tesisDoc_create};