import { getLicAdmin } from "../model/LicAdmin.js";
import { Router } from "express";

const router = Router();

const son_view = async (req,res) => {
    getLicAdmin.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const LicAdminController = {son_view};