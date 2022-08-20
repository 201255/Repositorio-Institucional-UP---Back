import { getBio } from "../model/IngBio.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getBio.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngBioController = {son_view};