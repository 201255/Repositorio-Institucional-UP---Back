import { getIngPetro } from "../model/IngPetro.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngPetro.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngPetroController = {son_view};