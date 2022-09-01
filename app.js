import express from 'express';
import swaggerDocs from './config/swagger.config.js';
import { api } from './config/Config.js';
import cors from'cors';

//Usuarios
import catalagoCa from './routes/catalogoCarreras.routes.js';
import docente from './routes/docente.routes.js';
import users from './routes/user.routes.js';
import tesislic from './routes/tesisLic.routes.js';
import contenido from './routes/Contenido.routes.js';
import tesisM from './routes/TesisM.routes.js';
import tesisDoc from './routes/tesisDoc.routes.js';

//carreras

//postgradosimport PostBio from './router/PostBio.js';import PostDocIng from './router/PostBio.js';



const app = express();

app.use(express.json());

app.use(cors())


app.use('/api/tesisDoc', tesisDoc)
app.use('/api/tesisM', tesisM)
app.use('/api/users', users);
app.use('/api/tesislic', tesislic);
app.use('/api/contenido', contenido);
app.use('/api/catalogo',catalagoCa);
app.use('/api/docente',docente);


app.listen(api.port,()=>{
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});