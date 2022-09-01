import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';


const TesisDoctorado = getData.sequelizeClient.define('TesisDoc',{

    IdTesisDoc: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
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
},{
tableName: 'TesisDoc',
});



export const getTesisDoctorado = TesisDoctorado; 