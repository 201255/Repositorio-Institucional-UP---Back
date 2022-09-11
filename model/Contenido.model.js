import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import { getTesisLic } from "./TesisLic.model.js";
import { getTesisDoctorado } from "./TesisDoc.model.js";
import { getTesisM } from "./TesisM.model.js";


const Contenido = getData.sequelizeClient.define ('Contenido', {

    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    titulo :{
        type : DataTypes.STRING,
        defaultValue: false,
    },
    autor: {
        type: DataTypes.STRING,
        defaultValue:false,
    },
    segundoAutor: {
        type: DataTypes.STRING,
        defaultValue:false,
    },
    fecha :{
        type: DataTypes.STRING,
        defaultValue: false
    },
    enlaceDocumento: {
        type: DataTypes.STRING,
        defaultValue: false
    },
},{
    tableName: 'Contenido',
 });

 Contenido.hasMany(getTesisLic,{
    foreignKey: 'ContenidoId'
}  
    
);
getTesisLic.belongsTo(Contenido);

Contenido.hasMany(getTesisDoctorado,{
    foreignKey: 'ContenidoId'
}  
    
);
getTesisDoctorado.belongsTo(Contenido);

Contenido.hasMany(getTesisM,{
    foreignKey: 'ContenidoId'
}  
    
);
getTesisM.belongsTo(Contenido);

export const getContenido = Contenido; 