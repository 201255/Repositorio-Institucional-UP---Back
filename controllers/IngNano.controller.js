import { getIngNano } from "../model/IngNano.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngNano.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngNanoController = {son_view};