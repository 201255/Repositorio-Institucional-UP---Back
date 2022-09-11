import { getContenido } from "../model/Contenido.model.js";
import { getTesisLic } from "../model/TesisLic.model.js";
import { getTesisM } from "../model/TesisM.model.js";
import { getTesisDoctorado } from "../model/TesisDoc.model.js";
import multer from 'multer';

import { Router } from "express";

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './assets')
//     },
//     filename: (req, file, cb) => {
//         const ext = file.originalname.split('.').pop()
//         // console.log(file.originalname)
//         cb(null, `${Date.now()}.${ext}`)
//     }
// })

// const upload = multer({ storage })

const contenido_create = async (req,res) => {
    // upload.single('enlaceDocumento');

    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const segundoAutor = req.body.segundoAutor;
    const fecha = req.body.fecha;
    const enlaceDocumento = req.file.originalname;

    // console.log(req.body.file)

    getContenido.create({
        titulo,
        autor,
        segundoAutor,
        fecha,
        enlaceDocumento,
    }, { fields: ['titulo','autor','segundoAutor','fecha','enlaceDocumento'] })
        .then(contenido => {
            res.send(contenido)
        })
        .catch(err => {
            console.log(err)
        });
}

// const contenido_create = async (req,res) => {
//     const titulo = req.body.titulo;
//     const autor = req.body.autor;
//     const fecha = req.body.fecha;
//     const enlaceDocumento = req.body.enlaceDocumento;

//     getContenido.create({
//         titulo,
//         autor,
//         fecha,
//         enlaceDocumento
//     })
//         .then(contenido => {
//             res.send(contenido)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

const contenido_view = async (req,res) => {
    getContenido.findAll({
        include :{
            model: getTesisLic,
            attributes:['carrera','directorTesis','coDirector']
        },
        attributes:['Id','titulo','autor','segundoAutor', 'fecha', 'enlaceDocumento']})
    .then(contenido => {
        res.send(contenido)
    })
    .catch(err => {
        console.log(err)
    })
}

const contenido_viewM = async (req,res) => {
    getContenido.findAll({
        include :{
            model: getTesisM,
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

const contenido_viewD = async (req,res) => {
    getContenido.findAll({
        include :{
            model: getTesisDoctorado,
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

export const ContenidoController = {contenido_create,contenido_view,contenido_delete,contenido_update,contenido_viewM,contenido_viewD};