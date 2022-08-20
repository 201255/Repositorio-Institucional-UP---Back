import { getManu } from "../model/IngManu.js";
import { Router } from "express";

const router = Router();
const son_view = async (req,res) => {
    getManu.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngManuController = {son_view};