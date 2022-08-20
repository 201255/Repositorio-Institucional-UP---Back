import { getPostDocing } from "../model/PostDocIng.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getPostDocing.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const postDocController = {son_view};