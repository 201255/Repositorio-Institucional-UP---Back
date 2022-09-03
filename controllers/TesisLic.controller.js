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

const tesislic_delete = async (req,res) => {
    const IdTesisLic = req.body.IdTesisLic;
    getTesisLic.destroy({where: {IdTesisLic:IdTesisLic}})
    .then((r) => {
        res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
        res.status(400).send(err);
    });
}

export const TesisLicController = {tesislic_create,tesislic_delete};