import { getContenido } from "../model/Contenido.model.js";
import { Router } from "express";

const son_view = async (req,res) => {
    getContenido.findAll({ attributes: ['Id'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const ContenidoController = {son_view};