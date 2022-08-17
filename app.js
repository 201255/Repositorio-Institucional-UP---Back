import express from 'express';
import { api } from './config/Config.js';
import catalagoCa from './router/rcatalogoCarreras.js';
import docente from './router/rdocente.js';
import users from './router/user.controller.js'

//carreras
import IngAgro from './router/rIngAgro.js';
import IngAmbiental from './router/rIngAmbiental.js';
import IngBio from './router/rIngBio.js';
import IngEnergia from './router/rIngEnergia.js';
import IngManu from './router/rIngManu.js';
import IngMeca from './router/rIngMeca.js';
import IngNano from './router/rIngNano.js';
import IngPetro from './router/rIngPetro.js';
import IngSoftware from './router/rIngSoftware.js';
import LicAdmin from './router/rLicAdmin.js';

//postgradosimport PostBio from './router/PostBio.js';import PostDocIng from './router/PostBio.js';
import PostEnergia from './router/rPostEnergia.js';
import PostBio from './router/rPostBio.js';
import PostDocIng from './router/rPostDocIng.js';


const app = express();

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
    console.log('server running on port=>',api.port);
});