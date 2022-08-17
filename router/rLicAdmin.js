import { getLicAdmin } from "../model/LicAdmin.js";
import { Router } from "express";

const router = Router();

router.get('/all_son_orm', async function (req, res) {
    getLicAdmin.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
});

export default router;