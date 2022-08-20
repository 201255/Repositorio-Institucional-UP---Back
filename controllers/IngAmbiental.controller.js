import { getIngAmbiental } from "../model/IngAmbiental.js"
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngAmbiental.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngAmbientalController = {son_view};