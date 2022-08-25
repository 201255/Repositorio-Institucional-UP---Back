import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';


const TesisLic = getData.sequelizeClient.define('TesisLic',{

    IdTesisLic: {
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
   tableName: 'TesisLic',
});


export const getTesisLic = TesisLic; 