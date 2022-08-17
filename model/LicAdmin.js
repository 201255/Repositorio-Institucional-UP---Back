import { getData } from "./db.js";
import { DataTypes } from 'sequelize';

//ID:
//nombreDocumento:
//autor:
//carrera:
//directorDocumento:
//coDirector:
//Fecha:
//Documento:
//Imagen:

const LicAdmin = getData.sequelizeClient.define('LicAdmin', {
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreDocumento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    directorDocumento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coDirector: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},
{
   tableName: 'LicAdmin',
});

export const getLicAdmin = LicAdmin;