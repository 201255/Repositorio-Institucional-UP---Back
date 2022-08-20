import express from 'express';
import swaggerDocs from './config/swagger.config.js';
import { api } from './config/Config.js';

//Usuarios
import catalagoCa from './routes/catalogoCarreras.routes.js';
import docente from './routes/docente.routes.js';
import users from './routes/user.routes.js'

//carreras
import IngAgro from './routes/IngAgro.routes.js';
import IngAmbiental from './routes/IngAmbiental.routes.js';
import IngBio from './routes/IngBio.routes.js';
import IngEnergia from './routes/IngEnergia.routes.js';
import IngManu from './routes/IngManu.routes.js';
import IngMeca from './routes/IngMeca.routes.js';
import IngNano from './routes/IngNano.routes.js';
import IngPetro from './routes/IngPetro.routes.js';
import IngSoftware from './routes/IngSoftware.routes.js';
import LicAdmin from './routes/LicAdmin.routes.js';

//postgradosimport PostBio from './router/PostBio.js';import PostDocIng from './router/PostBio.js';
import PostEnergia from './routes/PostEnergia.routes.js';
import PostBio from './routes/PostBio.routes.js';
import PostDocIng from './routes/PostDocIng.routes.js';


const app = express();

app.use(express.json());

app.use('/api/users', users)
app.use('/api/catalogo',catalagoCa);
app.use('/api/docente',docente);
app.use('/api/IngAgro',IngAgro);
app.use('/api/IngSoftware',IngSoftware);
app.use('/api/IngNano',IngNano);
app.use('/api/IngAmbiental',IngAmbiental);
app.use('/api/IngBio',IngBio);
app.use('/api/IngEnergia',IngEnergia);
app.use('/api/IngPetro',IngPetro);
app.use('/api/LicAdmin',LicAdmin);
app.use('/api/IngManu',IngManu);
app.use('/api/IngMeca',IngMeca);
app.use('/api/PostBio',PostBio);
app.use('/api/PostDocIng',PostDocIng);
app.use('/api/PostEnergia',PostEnergia);

app.listen(api.port,()=>{
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});