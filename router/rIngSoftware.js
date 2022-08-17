import { getIngSoftware } from "../model/IngSoftware.js";
import { Router } from "express";

const router = Router();

router.get('/all_son_orm', async function (req, res) {
    getIngSoftware.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
});

export default router;