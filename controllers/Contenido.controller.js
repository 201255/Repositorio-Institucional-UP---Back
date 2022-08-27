import { getContenido } from "../model/Contenido.model.js";
import { getTesisLic } from "../model/TesisLic.model.js";
import { Router } from "express";

const contenido_create = async (req,res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const fecha = req.body.fecha;
    const enlaceDocumento = req.body.enlaceDocumento;

    getContenido.create({
        titulo,
        autor,
        fecha,
        enlaceDocumento
    })
        .then(contenido => {
            res.send(contenido)
        })
        .catch(err => {
            console.log(err)
        })
}

const contenido_view = async (req,res) => {
    getContenido.findAll({
        include :{
            model: getTesisLic,
            attributes:['carrera','directorTesis','coDirector']
        },
        attributes:['Id','titulo','autor', 'fecha', 'enlaceDocumento']})
    .then(contenido => {
        res.send(contenido)
    })
    .catch(err => {
        console.log(err)
    })
}

const contenido_delete = async (req,res) => {
    const Id = req.body.Id;
    getContenido.destroy({where: {Id:Id}})
    .then((r) => {
        res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
        res.status(400).send(err);
    });
}

const contenido_update = async (req,res) => {
    const Id = req.body.Id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const fecha = req.body.fecha;
    const enlaceDocumento = req.body.enlaceDocumento;

    getContenido.findOne({ where: {Id:Id}})
    .then((contenido) => {
        contenido.update({titulo:titulo, autor:autor, fecha:fecha, enlaceDocumento:enlaceDocumento})
        res.status(200).json({ successfully: 'Datos Actualizados' });
    })
    .catch((err) => {
        err.status(400).json({ err: 'Error al actualizar' });
    })
}

export const ContenidoController = {contenido_create,contenido_view,contenido_delete,contenido_update};