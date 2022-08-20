import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
//ID:
//nombreDocumento:
//autor:
//carrera:
//directorTesis:
//coDirector:
//Fecha:
//Documento:
//Imagen:

const IngPetro = getData.sequelizeClient.define('IngPetro',{

    IdPetro: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreDocumento:{
        type:DataTypes.STRING,
        allowNull:false
    },
    autor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    carrera:{
        type:DataTypes.STRING,
        allowNull:false
    },
    directorTesis:{
        type:DataTypes.STRING,
        allowNull:false
    },
    coDirector:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    Documento:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
   tableName: 'IngPetro',
});

export const getIngPetro = IngPetro; 