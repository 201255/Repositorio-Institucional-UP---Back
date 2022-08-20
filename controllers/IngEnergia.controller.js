import { getEnergia } from "../model/IngEnergia.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getEnergia.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngEnergiaController = {son_view};