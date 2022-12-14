import { getTesisM } from "../model/TesisM.model.js";
import { Router } from "express";
import { dataEnv } from '../config/envData.js';
import bodyParser from "body-parser";

const router = Router();


const tesisM_create = async (req,res) => {
    const carrera = req.body.carrera;
    const directorTesis = req.body.directorTesis;
    const coDirector = req.body.coDirector;
    const ContenidoId = req.body.ContenidoId;
    
    getTesisM.create({
        carrera,
        directorTesis,
        coDirector,
        ContenidoId
    })
        .then(TesisM => {
            res.send(TesisM)
        })
        .catch(err => {
            console.log(err)
        })
}

export const TesisMController = {tesisM_create};