import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';


const TesisM = getData.sequelizeClient.define('TesisM',{

    IdTesisM: {
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
   tableName: 'TesisM',
});

export const getTesisM = TesisM; 