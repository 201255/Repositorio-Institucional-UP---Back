import { getBio } from "../model/IngBio.js";
import { Router } from "express";

const router = Router();

router.get('/all_son_orm', async function (req, res) {
    getBio.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
});

export default router;