import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import bcrypt from "bcrypt";

const PostEnergia = getData.sequelizeClient.define('postEnergia', {

//ID:
//nombreDocumento:
//autor:
//carrera:
//directorDocumento:
//coDirector:
//Fecha:
//Documento:
//Imagen:
    IdSofware: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreDocumento: {
        type:DataTypes.STRING,
        allowNull:false
    },
    autor: {
        type:DataTypes.STRING,
        allowNull:false
    },
    carrera: {
        type:DataTypes.STRING,
        allowNull:false
    },
    directorDocumento: {
        type:DataTypes.STRING, 
        allowNull:false
    },
    coDirector: {
        type:DataTypes.STRING,
        allowNull:false
    },
    fecha: {
        type:DataTypes.DATE,
        allowNull:null
    },
    documento: {
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen: {
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
   tableName: 'postEnergia',
});

export const getPostEnergia = PostEnergia;