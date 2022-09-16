import { getContenido } from "../model/Contenido.model.js";
import { getTesisLic } from "../model/TesisLic.model.js";
import { getTesisM } from "../model/TesisM.model.js";
import { getTesisDoctorado } from "../model/TesisDoc.model.js";
import fs from 'fs';
import {fileURLToPath} from 'url';
import path from "path";




import { Router } from "express";

const contenido_create = async (req,res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const fecha = req.body.fecha;
    const segundoAutor = req.body.segundoAutor
    const enlaceDocumento = req.file.originalname;

    getContenido.create({
        titulo,
        autor,
        fecha,
        enlaceDocumento,
        segundoAutor
    })
        .then(contenido => {
            res.send(contenido)
        })
        .catch(err => {
            console.log(err)
        })
}


const contenido_viewPDF = (function (req,res)  {
    let pdf = req.query.pdf;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let reqP = path.join(__dirname, "../")
    console.log("data"+reqP)
    let img =reqP+`\\assets\\${pdf}`;

    fs.access(img, fs.constants.F_OK, err => {
        console.log(`${img} ${err ? "no existe" : "existe"} `)
    });

    fs.readFile(img, function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/plane'});
            return res.end('404 not found')
        }else{
            res.writeHead(200, {'Content-Type' : 'application/pdf'});
            res.write(data);
            return res.end();
        }
    })
})

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

export const ContenidoController = {contenido_create,contenido_view,contenido_delete,contenido_update,contenido_viewM,contenido_viewD,contenido_viewPDF};