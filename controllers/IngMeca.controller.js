import { getIngMeca } from "../model/IngMeca.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngMeca.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngMecaController = {son_view};