import { getIngSoftware } from "../model/IngSoftware.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getIngSoftware.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const IngSoftwareController = {son_view};