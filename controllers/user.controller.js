import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getusers } from '../model/users.js';
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';



const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


const user_login = async (req, res) => {
    const user = await getusers.findOne({ where: { email: req.body.email } });
    if (user) {
        const validPassword = bcryptjs.compareSync(req.body.Password, user.Password);
        
            if (validPassword) {
                const token = jwt.sign({
                    sub: user. nombreDirector,
                    id: user.Id,
                }, 'secret', { expiresIn: '30m' }, dataEnv.parsed.JWT_TOKEN_SECRET, { algorithm: 'HS256' })
                user.token = token;

                res.header('auth-token', token).json({
                    error: null,
                    data: { token, user: user.Id, name: user.nombreDirector, validate: user.validate }
                });

            }
            else {
                return res.status(400).json({ error: 'contraseña no válida' })
            }
        
    }
    else {
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }


};


const user_create = async (req,res) => {
    const carrera = req.body.carrera;
    const nombreDirector = req.body.nombreDirector;
    const email = req.body.email;
    const Password = req.body.Password;

    getusers.create ({
        carrera,
        nombreDirector,
        email,
        Password
    },
    {fields: ["carrera", "nombreDirector", "email", "Password"]})
    .then(users => {
        res.send(users);
    })
    .catch((err)=> {
        console.log(err);
    })

};

const user_update = (req, res) => {
    const email = req.body.email
    getusers.findOne({ where: { email: email } })
        .then(users => {
            users.update({ Password: bcryptjs.hashSync(req.body.Password, 10) })
            res.status(200).json({ err: 'contraseña Actualizada' })
            // res.send(users);
        })
        .catch((err) => {
            res.status(400).json({ err: 'contraseña No Actualizado' })
        });
};

const user_view = async (req,res) => {
    getusers.findAll({
        attributes:['Id','carrera','nombreDirector']})
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        console.log(err)
    })
}

export const userController = { user_create, user_login, user_update,user_view};