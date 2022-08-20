import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import bcrypt from "bcrypt";

const IngNano = getData.sequelizeClient.define('IngNano', {

//ID:
//nombreDocumento:
//autor:
//carrera:
//directorDocumento:
//coDirector:
//Fecha:
//Documento:
//Imagen:
    IdNano: {
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
   tableName: 'IngNano',
});

export const getIngNano = IngNano;