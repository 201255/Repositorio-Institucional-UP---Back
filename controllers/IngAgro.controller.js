import { getIngAgro } from "../model/IngAgro.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngAgro.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngAgroController = {son_view};