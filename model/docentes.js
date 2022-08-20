import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';

const docente = getData.sequelizeClient.define('docente', {
    idDocente: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreDocente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idCarrera: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
   tableName: 'docente',
});

export const getDocente = docente;