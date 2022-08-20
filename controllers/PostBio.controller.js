import { getPostBio } from "../model/PostBio.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getPostBio.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const postBioController = {son_view};