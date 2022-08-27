import { getTesisLic } from "../model/TesisLic.model.js";
import { Router } from "express";
import { dataEnv } from '../config/envData.js';
import bodyParser from "body-parser";

const router = Router();


const tesislic_create = async (req,res) => {
    const carrera = req.body.carrera;
    const directorTesis = req.body.directorTesis;
    const coDirector = req.body.coDirector;
    const ContenidoId = req.body.ContenidoId;
    
    getTesisLic.create({
        carrera,
        directorTesis,
        coDirector,
        ContenidoId
    })
        .then(tesislic => {
            res.send(tesislic)
        })
        .catch(err => {
            console.log(err)
        })
}

export const TesisLicController = {tesislic_create};