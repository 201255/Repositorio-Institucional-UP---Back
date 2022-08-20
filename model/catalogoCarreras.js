import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';

const catalogoCa = getData.sequelizeClient.define('catalogoCarrera', {
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
},
{
   tableName: 'catalogoCarrera',
});

export const getCatalogo = catalogoCa;